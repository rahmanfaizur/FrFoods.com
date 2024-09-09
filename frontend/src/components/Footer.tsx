// Define a functional component named Footer
const Footer = () => {
    return (
        // Main footer container with purple background and vertical padding
        <div className="bg-purple-500 py-10">
             {/* Inner container with responsive layout */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                 {/* Website name or logo */}
                <span className="text-3xl text-white font-bold tracking-tight">
                    Frfoods.com
                </span>
                 {/* Container for policy links */}
                <span className="text-white font-bold trackin-tight flex gap-4">
                     {/* Individual policy links */}
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    )
}

// Export the Footer component as the default export
export default Footer;