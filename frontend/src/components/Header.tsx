import { Link } from "react-router-dom"; // Import Link for client-side navigation
import MobileNav from "./MobileNav"; // Import mobile navigation component
import MainNav from "./MainNav"; // Import main navigation component

const Header = () => {
    return (
        // Main header container with purple bottom border and vertical padding
        <div className="border-b-2 border-b-purple-500 py-6">
            {/* Inner container for content alignment */}
            <div className="container mx-auto flex justify-between items-center">
                 {/* Home page link with styled text */}
                <Link to="/" className="text-3xl font-bold tracking-tight text-purple-500">
                    FrFoods.com
                </Link>
                 {/* Mobile navigation, visible only on small screens */}
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                 {/* Main navigation, hidden on small screens, visible on medium and larger */}
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>
        </div>
    );
};

export default Header;