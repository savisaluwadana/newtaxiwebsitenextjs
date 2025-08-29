import { NextResponse } from "next/server";

interface GoogleReview {
    author_name: string;
    rating: number;
    text: string;
}

interface GooglePlaceDetailsResponse {
    result?: {
        reviews?: GoogleReview[];
    };
}

export async function GET() {
    const { NEXT_PUBLIC_GOOGLE_PLACES_API_KEY, NEXT_PUBLIC_GOOGLE_PLACE_ID } = process.env;

    if (!NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || !NEXT_PUBLIC_GOOGLE_PLACE_ID) {
        return NextResponse.json({ message: "Missing API key or Place ID" }, { status: 500 });
    }

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${NEXT_PUBLIC_GOOGLE_PLACE_ID}&fields=reviews&key=${NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`;

    try {
        const response = await fetch(apiUrl);
        const data: GooglePlaceDetailsResponse = await response.json();

        if (!data.result?.reviews) {
            return NextResponse.json({ message: "No reviews found" }, { status: 404 });
        }

        return NextResponse.json({ reviews: data.result.reviews }, { status: 200 });
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
