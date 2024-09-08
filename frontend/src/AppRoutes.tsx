import { spawn } from "child_process"; // Importing 'spawn' from 'child_process' to execute commands (if needed, though it's not used here)
import { Navigate, Route, Routes } from "react-router-dom"; // Import necessary components for routing in the app
import Layout from "./layouts/layout"; // Import the Layout component to use as a wrapper for pages
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
    return (
        <Routes> {/* Defines the available routes for the application */}
            <Route path="/" element={<Layout><HomePage/></Layout>}></Route> {/* Route for the home page, wrapped in the Layout component */}
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}></Route> {/* Route for the user profile page */}
            <Route path="*" element={<Navigate to="/"/>}></Route> {/* Redirect any undefined routes to the home page */}
        </Routes>
    );
}

export default AppRoutes; // Export the AppRoutes component for use in other parts of the app
