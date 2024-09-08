import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
    return (
        <div>
            <Link className="flex bg-white items-center font-bold hover: text-purple-500" to="/user-profile">
            User Profile
            </Link>
            <Button className="flex items-center px-3 font-bold hover:bg-gray-500">
                Log Out
            </Button>
        </div>
    )
}

export default MobileNavLinks;