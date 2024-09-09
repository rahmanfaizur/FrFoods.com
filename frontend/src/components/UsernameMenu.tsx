import { CircleUserRound } from "lucide-react" // Import user icon
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu" // Import dropdown components
import { useAuth0 } from "@auth0/auth0-react" // Import Auth0 hook
import { Link } from "react-router-dom"; // Import Link for navigation
import { Separator } from "./ui/separator"; // Import Separator component
import { Button } from "./ui/button"; // Import Button component

const UsernameMenu = () => {
    // Destructure user object and logout function from useAuth0 hook
    const { user, logout } = useAuth0();

    return (
        <DropdownMenu>
            {/* Dropdown trigger: displays user email and icon */}
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-purple-500 gap-2">
                <CircleUserRound className="text-purple-500"/>
                {user?.email} {/* Display user's email if available */}
            </DropdownMenuTrigger>

            {/* Dropdown content */}
            <DropdownMenuContent>
                {/* User Profile link */}
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-purple-500">
                        User Profile
                    </Link>   
                </DropdownMenuItem>

                <Separator/> {/* Visual separator */}

                {/* Logout button */}
                <Button 
                    className="flex flex-1 font-bold bg-purple-500" 
                    onClick={() => logout()} // Call logout function when clicked
                >
                    Log Out
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;