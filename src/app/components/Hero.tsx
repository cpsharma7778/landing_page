import Image from "next/image";
import HeroImage from '../assets/images/image 130.png'; // Adjust the path to your image
import play from '../assets/images/Buttons.png'; // Adjust the path to your image
import ellipse from '../assets/images/Ellipse.png'; // Adjust the path to your image

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-pink-200 via-blue-300 to-blue-400 text-white h-screen flex items-center justify-center px-4 md:px-10 lg:px-[50px] overflow-hidden">
      {/* Background Ellipse */}
      <div className="absolute top-0 left-0 -mt-32 -ml-32 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[643px] lg:h-[643px] opacity-50">
        <Image src={ellipse} layout="fill" objectFit="contain" alt="ellipse" />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between relative z-10 mt-10 lg:mt-0">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-bold text-3xl lg:text-5xl uppercase leading-tight tracking-tight mb-4">
            Stock Screening Simplified
          </h1>
          <p className="font-medium text-base lg:text-lg mb-6">
            Find Winning Stock Faster with Nifty Trader&apos;s <br />
            Advanced Stock Screening Tool
          </p>
          <button className="h-12 w-32 lg:h-12 lg:w-36 rounded bg-[#13A8D7] font-bold text-white text-lg hover:border hover:border-[#13A8D7] hover:text-[#13A8D7] hover:bg-transparent transition duration-300 ease-in">
            Free Trial
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative">
            <Image src={HeroImage} height={452} width={776} alt="hero image" className="max-w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image src={play} height={96} width={96} alt="play button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
