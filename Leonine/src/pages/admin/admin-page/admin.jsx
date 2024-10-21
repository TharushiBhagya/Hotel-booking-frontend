import { Link, Route, Routes } from "react-router-dom";
import { IoBookmarks } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { FaBed, FaUsers, FaCommentDots, FaImages } from "react-icons/fa";
import AdminBooking from "../bookings/adminBooking";
import AdminCategories from "../categories/adminCategory";
import AdminFeedback from "../feedback/feedback";
import AdminGalleryItem from "../galleryItem/galleryItems";
import AdminRooms from "../rooms/rooms";
import AdminUsers from "../users/users";

export default function AdminPage() {
    return (
        <div className="w-full max-h-[100vh] overflow-hidden flex">
            <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <Link to="/admin/bookings" className="flex items-center">
                        <IoBookmarks className="mr-2" />
                        Bookings
                    </Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <Link to="/admin/categories" className="flex items-center">
                        <BiSolidCategory className="mr-2" />
                        Categories
                    </Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <Link to="/admin/rooms" className="flex items-center">
                        <FaBed className="mr-2" />
                        Rooms
                    </Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <Link to="/admin/users" className="flex items-center">
                        <FaUsers className="mr-2" />
                        Users
                    </Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <Link to="/admin/feedbacks" className="flex items-center">
                        <FaCommentDots className="mr-2" />
                        Feedback
                    </Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <Link to="/admin/galleryItems" className="flex items-center">
                        <FaImages className="mr-2" />
                        Gallery Items
                    </Link>
                </div>
            </div>
            <div className="w-[80%] max-h-[100vh] overflow-y-scroll  bg-blue-800">
                <Routes path="/*">
                <Route path="/bookings" element={<AdminBooking/>}/>
                <Route path="/categories" element={<AdminCategories/>}/>
                <Route path="/rooms" element={<AdminRooms/>}/>
                <Route path="/users" element={<AdminUsers/>}/>
                <Route path="/feedbacks" element={<AdminFeedback/>}/>
                <Route path="/galleryItems" element={<AdminGalleryItem/>}/>
                </Routes>
            </div>
        </div>
    );
}
