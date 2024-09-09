import { Button } from "./ui/button" // Import Button component from UI library
import { useAuth0 } from "@auth0/auth0-react" // Import Auth0 hook for authentication
import UsernameMenu from "./UsernameMenu" // Import custom UsernameMenu component

const MainNav = () => {
    // Destructure needed functions and state from useAuth0 hook
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        // Container for navigation items
        <span className="flex space-x-2 items-center">
            {/* Conditional rendering based on authentication state */}
            {isAuthenticated ? (
                // If user is authenticated, show UsernameMenu
                <UsernameMenu />
            ) : (
                // If user is not authenticated, show Login button
                <Button 
                    variant="ghost" 
                    className="font-bold hover:text-purple-500 hover:bg-white" 
                    onClick={async () => loginWithRedirect()}
                >
                    Log In
                </Button>
            )}
        </span>
    )
}

export default MainNav