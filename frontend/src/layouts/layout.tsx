// Define the type for the component's props
// 'children' is a special React prop that represents the elements passed between the component's opening and closing tags
import Hero from '@/components/Hero'; // Importing the Hero component (likely a banner or introduction section)
import Header from '../components/Header'; // Importing the Header component (probably includes the navigation bar)
import Footer from '@/components/Footer'; // Importing the Footer component (which may include page links or contact info)

type Props = {
    children: React.ReactNode; 
    // 'React.ReactNode' is a type representing any valid JSX content like elements, strings, or fragments that can be rendered by React
};

// Define the Layout component that accepts 'children' as a prop
const Layout = ({ children }: Props) => {
    return (
        // The main wrapper div that uses flexbox to arrange the layout and ensure the page stretches to the full height of the screen
        <div className="flex flex-col min-h-screen">
            
            {/* Render the Header component at the top of the layout */}
            <Header />
            
            {/* Render the Hero component, likely showcasing a banner or main message */}
            <Hero />
            
            {/* Main content section - centered, responsive, and padded with a gap for visual comfort */}
            <div className="container mx-auto flex-1 py-10">
                {/* 'children' represents the content or components passed into Layout from its parent */}
                {children}
            </div>
            
            {/* Render the Footer component at the bottom of the layout */}
            <Footer />
        </div>
    );
};

// Export the Layout component for use in other parts of the app
export default Layout;
