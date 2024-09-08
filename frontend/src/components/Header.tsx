import { Link } from "react-router-dom"; // Import the Link component from react-router-dom for navigation
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return (
        // Header container with a bottom border and padding for spacing
        <div className="border-b-2 border-b-purple-500 py-6">
            {/* Inner container to align content, centers it horizontally */}
            <div className="container mx-auto flex justify-between items-center">
                {/* Link component for navigating to the home page ('/') */}
                <Link to="/" className="text-3xl font-bold tracking-tight text-purple-500">
                    FrFoods.com {/* The website name displayed as a styled link */}
                </Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>
        </div>
    );
};

export default Header;
