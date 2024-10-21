const bookings = [
    {
        bookingId: 101,
        roomId: 301,
        email: "john.doe@example.com",
        guestPhone: "+1234567890",
        checkInDate: "2024-11-01",
        checkOutDate: "2024-11-05",
        totalPrice: 500,
        bookingStatus: "Confirmed",
        reason: "Business trip",
        notes: "Late check-in requested",
        timestamp: "2024-10-18T12:30:00",
    },
    {
        bookingId: 102,
        roomId: 302,
        email: "jane.smith@example.com",
        guestPhone: "+1987654321",
        checkInDate: "2024-12-10",
        checkOutDate: "2024-12-15",
        totalPrice: 750,
        bookingStatus: "Pending",
        reason: "Vacation",
        notes: "Needs a baby cot",
        timestamp: "2024-10-19T14:00:00",
    },
    {
        bookingId: 103,
        roomId: 303,
        email: "mike.jones@example.com",
        guestPhone: "+1122334455",
        checkInDate: "2024-10-25",
        checkOutDate: "2024-10-30",
        totalPrice: 300,
        bookingStatus: "Cancelled",
        reason: "Personal reasons",
        notes: "Refund requested",
        timestamp: "2024-10-17T09:45:00",
    },
    {
        bookingId: 104,
        roomId: 304,
        email: "sarah.connor@example.com",
        guestPhone: "+1456789123",
        checkInDate: "2024-11-20",
        checkOutDate: "2024-11-22",
        totalPrice: 400,
        bookingStatus: "Confirmed",
        reason: "Conference",
        notes: "Early check-in requested",
        timestamp: "2024-10-20T08:15:00",
    },
    {
        bookingId: 105,
        roomId: 305,
        email: "tom.brown@example.com",
        guestPhone: "+1098765432",
        checkInDate: "2024-11-25",
        checkOutDate: "2024-11-28",
        totalPrice: 600,
        bookingStatus: "Checked Out",
        reason: "Family vacation",
        notes: "No additional notes",
        timestamp: "2024-10-21T17:45:00",
    },
];


export default function AdminBooking() {
    return (
        <div className="w-full p-6 bg-gray-50">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-separate border-spacing-0 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-left rounded-t-lg">
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Booking ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Room ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Email</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Guest Phone</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Check-In Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Check-Out Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Total Price ($)</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Booking Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Reason</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Notes</th>
                            <th className="px-6 py-3 border-b border-gray-200 shadow-inner">Timestamp</th>
                        </tr>
                    </thead>
                  <tbody>
                    {
                        bookings.map((booking,index)=>{
                           return (
                            <tr key={index} >
                                <td>
                                    {booking.bookingId}
                                </td>
                                <td>
                                    {booking.email}
                                </td>
                                <td>
                                    {booking.checkInDate}
                                </td>
                                <td>
                                    {booking.checkOutDate}
                                </td>
                                <td>
                                    {booking.bookingStatus}
                                </td>
                                <td>
                                    {booking.reason}
                                </td>
                            </tr>
                           )
                        } )
                    }
                  </tbody>
                  
                </table>
            </div>
        </div>
    );
}
