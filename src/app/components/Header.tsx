import React from 'react';
import Logo from '../assets/images/Logo.svg'; // Adjust the path to your logo
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#3A3A3A] to-[#0277BD] shadow-md w-full border-b border-gray-200 z-30">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10 h-full">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={120} // Adjust width as needed
            height={40} // Adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Button */}
        <div className='flex items-center'>
          <a 
            href="#" 
            className="w-[152px] h-[40px] rounded-[4px] border border-white text-white text-center py-2 px-4 cursor-pointer transition duration-300 ease-in group hover:bg-white hover:text-black"
          >
            Visit Website
          </a>
        </div>
      </div>
    </header>
  );
}
