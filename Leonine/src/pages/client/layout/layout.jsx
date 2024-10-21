import React from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Flexbox layout to ensure proper height */}
            <Header />
            <div className="flex-grow mt-[100px]"> {/* Grow to take available space */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
