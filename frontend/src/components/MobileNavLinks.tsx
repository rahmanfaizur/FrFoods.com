import { Link } from "react-router-dom"; // Import Link for client-side navigation
import { Button } from "./ui/button"; // Import Button component from UI library

const MobileNavLinks = () => {
    return (
        <div>
            {/* Link to User Profile page */}
            <Link 
                className="flex bg-white items-center font-bold hover:text-purple-500" 
                to="/user-profile"
            >
                User Profile
            </Link>
            
            {/* Log Out button */}
            <Button 
                className="flex items-center px-3 font-bold hover:bg-gray-500"
            >
                Log Out
            </Button>
        </div>
    )
}

export default MobileNavLinks;