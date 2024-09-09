import hero from "../images/frUpSdxl.png" // Import the hero image

const Hero = () => {
    return (
        <div>
            {/* Hero image with responsive sizing and cropping */}
            <img 
                src={hero} 
                alt="" 
                className="w-full max-h-[600px] object-cover"
            />
        </div>
    )
}

export default Hero;