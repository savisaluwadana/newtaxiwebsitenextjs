"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
// import SectionHeading from "@/components/SectionHeading"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


interface GoogleReview {
    author_name: string
    rating: number
    text: string
    profile_photo_url?: string
    relative_time_description?: string
}

export default function GoogleReviews() {
    const [reviews, setReviews] = useState<GoogleReview[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch("/api/google-reviews")
                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch reviews")
                }

                setReviews(data.reviews)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error")
            } finally {
                setLoading(false)
            }
        }

        fetchReviews()
    }, []) // Removed reviews.length from dependency array to prevent re-fetching on state change

    useEffect(() => {
        // Auto-scroll reviews
        if (reviews.length > 0) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % reviews.length)
            }, 5000)
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [reviews.length])

    const startCarousel = () => {
        if (reviews.length > 0) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % reviews.length)
            }, 5000)
        }
    }

    const nextReview = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setCurrentIndex((currentIndex + 1) % reviews.length)
        startCarousel() // Optional: restart auto-scroll after manual navigation
    }

    const prevReview = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : reviews.length - 1)
        startCarousel() // Optional: restart auto-scroll after manual navigation
    }

    if (loading)
        return (
            <div className="flex justify-center py-16">
                <div className="animate-pulse flex space-x-4 w-full max-w-lg px-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        )

    if (error) return <p className="text-red-500 text-center py-8">Error: {error}</p>

    return (
        <section className="py-6 sm:py-12 w-full mx-auto relative">
            {/* The outer container handles the consistent padding for all screen sizes */}
            <div className="mx-auto px-3 sm:px-4 w-full">
                {/*<SectionHeading title="Customer Reviews" />*/}

                {/*<p className="text-gray-600 max-w-2xl mx-auto text-center mb-6 sm:mb-10 px-2 text-sm sm:text-base">*/}
                {/*    Don't just take our word for it. See what our customers have to say about their experience with TakeMeLK.*/}
                {/*</p>*/}

                {/* Mobile navigation buttons - visible only on small screens */}
                {/*<div className="flex justify-between mb-4 md:hidden px-2">*/}
                {/*    <button*/}
                {/*        onClick={prevReview}*/}
                {/*        className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#93F0BD] hover:text-white transition-colors duration-300"*/}
                {/*        aria-label="Previous review"*/}
                {/*    >*/}
                {/*        <FaChevronLeft className="h-4 w-4" />*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        onClick={nextReview}*/}
                {/*        className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#93F0BD] hover:text-white transition-colors duration-300"*/}
                {/*        aria-label="Next review"*/}
                {/*    >*/}
                {/*        <FaChevronRight className="h-4 w-4" />*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/* This relative container is for positioning the buttons */}
                <div className="relative">
                    <button
                        onClick={prevReview}
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#93F0BD] hover:text-white transition-colors duration-300"
                        aria-label="Previous review"
                    >
                        <FaChevronLeft className="h-4 w-4" />
                    </button>

                    {/* The overflow container now gets margin on desktop to make space for the buttons */}
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 w-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 flex flex-col p-4 md:p-6"
                                >
                                    <div className="flex items-start mb-4">
                                        {review.profile_photo_url && (
                                            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 mr-3 sm:mr-4">
                                                <Image
                                                    src={review.profile_photo_url || "/placeholder.svg"}
                                                    alt={review.author_name}
                                                    className="rounded-full object-cover border-2 border-[#93F0BD]"
                                                    fill
                                                    sizes="(max-width: 640px) 40px, 48px"
                                                />
                                            </div>
                                        )}

                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-bold text-base sm:text-lg break-words">{review.author_name}</h3>
                                            <div className="flex flex-wrap items-center text-sm">
                                                <div className="text-yellow-400 mr-2">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <span key={i} className="text-sm">
                              {i < review.rating ? "\u2605" : "\u2606"}
                            </span>
                                                    ))}
                                                </div>
                                                {review.relative_time_description && (
                                                    <span className="text-xs sm:text-sm text-gray-300">{review.relative_time_description}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative pl-3 sm:pl-4">
                                        <div className="absolute left-0 top-0 h-fit w-1 bg-[#93F0BD] rounded"></div>
                                        <p className="text-sm sm:text-base text-gray-200 italic">
                                            {review.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextReview}
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#93F0BD] hover:text-white transition-colors duration-300"
                        aria-label="Next review"
                    >
                        <FaChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex justify-center mt-4 sm:mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (intervalRef.current) clearInterval(intervalRef.current)
                                setCurrentIndex(index)
                                startCarousel()
                            }}
                            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 mx-1 sm:mx-1.5 rounded-full ${index === currentIndex ? "bg-[#93F0BD]" : "bg-gray-300"}`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
