import { spawn } from "child_process"; 
// Importing 'spawn' from 'child_process' for executing system commands (though it's not used in this file, it could be needed for backend operations)

import { Navigate, Route, Routes } from "react-router-dom"; 
// Importing routing components from 'react-router-dom' to define navigation paths

import Layout from "./layouts/layout"; // Importing the Layout component that likely provides common structure (header, footer, etc.)
import HomePage from "./pages/HomePage"; // Importing the HomePage component to render the home page

const AppRoutes = () => {
    return (
        <Routes> {/* Defines the set of routes (paths) in the application */}
            <Route path="/" element={<Layout><HomePage/></Layout>}></Route> 
            {/* 
                Route for the root ("/") path. 
                It renders the HomePage component inside the Layout component, 
                so the HomePage gets the layout's structure (like a navbar, footer, etc.)
            */}
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}></Route> 
            {/* 
                A simple route for "/user-profile" that just displays text. 
                This could later be replaced with a full UserProfile component.
            */}
            <Route path="*" element={<Navigate to="/"/>}></Route> 
            {/* 
                This route handles any unknown or undefined paths (denoted by "*").
                It redirects users to the home page ("/") if they try to access an invalid route.
            */}
        </Routes>
    );
}

export default AppRoutes; // Exporting the AppRoutes component for use in other parts of the app (likely in the main app entry point)
