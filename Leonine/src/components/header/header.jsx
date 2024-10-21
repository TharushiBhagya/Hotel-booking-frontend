import UserTag from "../userData/userdata";

function Header(){
    return(
        <header className="w-full bg-blue-500 flex items-center justify-between h-[100px]  px-6 fixed top-0 z-50" >
            <UserTag imagelink="images/Leonine.png" name="Leonine Villa" />
            <nav className="flex space-x-6 text-white text-lg ml-auto font-semibold">
                <a href="#home" className="hover:text-gray-200">Home</a>
                <a href="#about" className="hover:text-gray-200">About Us</a>
                <a href="#contact" className="hover:text-gray-200">Contact</a>
                <a href="#gallery" className="hover:text-gray-200">Gallery</a>
                <a href="#dining" className="hover:text-gray-200">Dining</a>
            </nav>       
        </header>
    );
}
export default Header;