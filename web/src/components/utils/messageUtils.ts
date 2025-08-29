export function sendRideMessage(pickUpDestination: string ,selectedDestination: string, selectedVehicle: string, totalPrice: number, pickUpDate: string, pickUpTime: string) {
    const message = `Hey! I'd like to book a ride.

📍 Pickup: ${pickUpDestination}
🏁 Destination: ${selectedDestination}
🚘 Vehicle: ${selectedVehicle}
💰 Total Price: LKR ${totalPrice.toFixed(2)}
📅 Pick-Up Date: ${pickUpDate}
⏰ Pick-Up Time: ${pickUpTime}

Let me know if everything looks good. Thanks! 😊`;

    const phoneNumber = "+94777656843";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

export function sendMessage(customMessage: string) {
    const phoneNumber = "+94777656843";
    const message = `Hey there!

${customMessage}

Let me know if you need any changes. Looking forward to your confirmation! 🚀`;

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}