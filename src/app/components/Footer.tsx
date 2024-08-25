import facebook from '../assets/images/Facebook.svg';
import youtube from '../assets/images/Youtube.svg';
import linkedin from '../assets/images/Linkedin (1).svg';
import instagram from '../assets/images/Instagram.svg';
import telegram from '../assets/images/Frame 634.svg';
import twitter from '../assets/images/Group.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-4 px-4 md:px-[70px]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <ul className="flex items-center gap-4 mb-4 md:mb-0">
          {[
            { src: facebook, alt: 'facebook' },
            { src: twitter, alt: 'twitter' },
            { src: youtube, alt: 'youtube' },
            { src: linkedin, alt: 'linkedin' },
            { src: instagram, alt: 'instagram' },
            { src: telegram, alt: 'telegram' },
          ].map((icon, index) => (
            <li key={index} className="h-[40px] w-[40px] rounded-full bg-white p-1 flex items-center justify-center">
              <Image className="object-contain" src={icon.src} height={30} width={30} alt={icon.alt} />
            </li>
          ))}
        </ul>
        <a href="#" className="text-center md:text-left">
          <p className="mb-0 underline">www.niftytrader.in</p>
        </a>
      </div>
    </footer>
  );
}
