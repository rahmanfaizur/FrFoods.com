import { CircleUserRound, Menu } from "lucide-react"; // Importing Menu icon from the 'lucide-react' icon library
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"; // Import components for a sliding panel (Sheet)
import { Separator } from "./ui/separator"; // Import a horizontal separator for layout
import { Button } from "./ui/button"; // Import Button component
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return (
        <Sheet> {/* Sheet component is a sliding panel used for mobile navigation */}
            <SheetTrigger> {/* SheetTrigger controls when the Sheet is shown */}
                <Menu className="text-purple-500"/> {/* Menu icon triggers the panel and is styled in purple */}
            </SheetTrigger>
            <SheetContent className="space-y-3"> {/* The content inside the sliding panel, with spacing between elements */}
                <SheetTitle>
                    {isAuthenticated ? 
                    <span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-purple-500"/>
                        {user?.email}
                    </span> 
                    : <span> Welcome to FrFoods.com!</span>
                }
                </SheetTitle>
                <Separator/> {/* Horizontal line separator for layout */}
                <SheetDescription className="flex"> {/* Description section inside the Sheet with flexbox layout */}
                    {isAuthenticated ? <MobileNavLinks/> : <Button className="flex-1 font-bold bg-purple-500">Log In</Button> }
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav; // Export the MobileNav component for use in other parts of the app
