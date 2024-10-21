import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const feedback =[
    {
        "user": "60d0fe4f5311236168a109ca",
        "rating": 5,
        "comment": "Great service and friendly staff!",
        "feedbackDate": "2024-10-20T15:12:05.000Z",
        "response": "Thank you for your feedback!",
        "responseDate": "2024-10-21T10:30:00.000Z",
        "isApproved": true
    },
    {
        "user": "60d0fe4f5311236168a109cb",
        "rating": 3,
        "comment": "The room was clean, but the food was average.",
        "feedbackDate": "2024-10-18T08:45:15.000Z",
        "response": "We appreciate your feedback and will work on improving our food quality.",
        "responseDate": "2024-10-19T09:15:00.000Z",
        "isApproved": true
    },
    {
        "user": "60d0fe4f5311236168a109cc",
        "rating": 4,
        "comment": "Nice place, but the Wi-Fi was a bit slow.",
        "feedbackDate": "2024-10-19T11:23:45.000Z",
        "response": "Thank you for your feedback. We are working on enhancing our Wi-Fi service.",
        "responseDate": "2024-10-20T14:00:00.000Z",
        "isApproved": false
    },
    {
        "user": "60d0fe4f5311236168a109cd",
        "rating": 2,
        "comment": "Not satisfied with the customer service.",
        "feedbackDate": "2024-10-17T16:34:22.000Z",
        "response": "We apologize for the inconvenience. Our team will reach out to you to address your concerns.",
        "responseDate": "2024-10-18T12:20:00.000Z",
        "isApproved": false
    },
    {
        "user": "60d0fe4f5311236168a109ce",
        "rating": 1,
        "comment": "Terrible experience. Room was dirty and staff was rude.",
        "feedbackDate": "2024-10-16T07:12:55.000Z",
        "response": "We are sorry to hear about your experience. We will look into this matter immediately.",
        "responseDate": "2024-10-17T09:00:00.000Z",
        "isApproved": true
    }
];
export default function AdminFeedback() {
    return (
        <div className="w-full p-6 bg-gray-50">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-separate border-spacing-0 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-[#10375C] text-white text-left rounded-t-lg">
                            <th className="px-6 py-3 border-b border-[#001F3F]">User Email</th>
                            <th className="px-6 py-3 border-b border-[#001F3F]">Rating</th>
                            <th className="px-6 py-3 border-b border-[#001F3F]">Comment</th>
                            <th className="px-6 py-3 border-b border-[#001F3F]">Feedback Date</th>
                            <th className="px-6 py-3 border-b border-[#001F3F]">Response</th>
                            <th className="px-6 py-3 border-b border-[#001F3F]">Response Date</th>
                            <th className="px-6 py-3 border-b border-[#001F3F]">Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback.map((feedback, index) => {
                            return (
                                <tr key={index} className="bg-[#F4F6FF] hover:bg-[#F3C623] transition-colors duration-300">
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{feedback.user}</td>
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{feedback.rating}</td>
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{feedback.comment}</td>
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{new Date(feedback.feedbackDate).toLocaleDateString()}</td>
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{feedback.response || 'No Response'}</td>
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{feedback.responseDate ? new Date(feedback.responseDate).toLocaleDateString() : 'N/A'}</td>
                                    <td className="px-6 py-3 border-b border-[#001F3F] text-center">
                                        {feedback.isApproved ? (
                                            <FaCheckCircle className="text-green-500" />
                                        ) : (
                                            <FaTimesCircle className="text-red-500" />
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
