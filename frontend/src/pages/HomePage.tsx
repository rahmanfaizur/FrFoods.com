import LandingImage from "../images/landing.png"; // Importing the landing image
import Stores from "../images/playNapp.png"; // Importing the store download image (PlayStore and AppStore logos, assumed)

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12"> {/* Main container with flex layout, stacking items vertically and adding a gap */}
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                {/* Section with white background, rounded corners, shadow, vertical stacking, and centered text */}
                {/* The negative margin (-mt-16) moves this section upwards */}
                
                <h1 className="text-5xl font-bold tracking-tight text-purple-600">
                    Tuck into takeaway today! {/* Large, bold title with purple text */}
                </h1>
                <span className="text-xl">Food is just a click away!</span> {/* Subtitle with slightly smaller font */}
            </div>
            
            <div className="grid md:grid-cols-2 gap-5"> 
                {/* A grid layout with two columns on medium screens and above. gap-5 adds space between items */}
                
                <img src={LandingImage} alt="" /> {/* Image on the left side of the grid (displays the landing image) */}
                
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    {/* A flexbox for stacking content vertically, centered horizontally and vertically */}
                    
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeaway even faster! {/* A bold, medium-sized header for app promotion */}
                    </span>
                    <span className="">
                        Download FrFoods App for faster ordering and personalised recommendation!
                        {/* Promoting app download with a short description */}
                    </span>
                    <img src={Stores} alt="" /> {/* Image that shows the App Store and Play Store download links */}
                </div>
            </div>
        </div>
    );
};

export default HomePage; // Exporting the HomePage component for use in other parts of the app
