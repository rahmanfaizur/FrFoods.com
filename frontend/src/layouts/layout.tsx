// Define the type for the component's props
// 'children' is a special React prop that represents the elements passed between the component's opening and closing tags
import Hero from '@/components/Hero';
import Header from '../components/Header'
import Footer from '@/components/Footer';
type Props = {
    children: React.ReactNode; // 'React.ReactNode' is a union type that represents any valid JSX content (elements, strings, fragments, etc.)
};

// Define the Layout component that accepts 'children' as a prop
const Layout = ({ children }: Props) => {
    return (
        // The main wrapper div with flexbox to structure the page and ensure it takes full height of the screen
        <div className="flex flex-col min-h-screen">
            
            {/* Render the Header component at the top of the layout */}
            <Header />
            <Hero/>
            {/* Main content section - centers the content and adds padding */}
            <div className="container mx-auto flex-1 py-10">
                {/* 'children' represents the content or components passed into Layout from its parent */}
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

// Export the Layout component for use in other parts of the app
export default Layout;
