import { CircleUserRound, Menu } from "lucide-react"; // Import icons
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"; // Import Sheet components
import { Separator } from "./ui/separator"; // Import Separator component
import { Button } from "./ui/button"; // Import Button component
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook
import MobileNavLinks from "./MobileNavLinks"; // Import custom MobileNavLinks component

const MobileNav = () => {
    // Destructure authentication-related functions and state from useAuth0 hook
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-purple-500"/> 
                 {/* Menu icon to open the mobile navigation */}
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        // Display user info if authenticated
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-purple-500"/>
                            {user?.email}
                        </span> 
                    ) : (
                        // Welcome message if not authenticated
                        <span>Welcome to FrFoods.com!</span>
                    )}
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex">
                    {isAuthenticated ? (
                        // Show navigation links if authenticated
                        <MobileNavLinks/>
                    ) : (
                        // Show login button if not authenticated
                        <Button className="flex-1 font-bold bg-purple-500" onClick={loginWithRedirect}>
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;