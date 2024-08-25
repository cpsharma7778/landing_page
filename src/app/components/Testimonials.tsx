// src/components/Testimonials.tsx
import Image from 'next/image';
import avatar1 from '../assets/images/avatar1.svg';
import avatar2 from '../assets/images/avatar2.svg';
import avatar3 from '../assets/images/avatar3.svg';
import avatar4 from '../assets/images/avatar4.svg';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 px-4 w-full">
      <h2 className="text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
      <div className='w-full flex flex-col md:flex-row md:gap-4 lg:gap-8 overflow-x-hidden'>
        <div className="w-full md:w-1/2 p-2 mb-4 md:mb-0 flex-none bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
          <div className='rounded-full overflow-hidden h-[160px] w-[160px] md:w-1/3 mb-4 md:mb-0'>
            <Image src={avatar1} alt='avatar1' height={160} width={160} />
          </div>
          <div className='md:w-[80%] text-center md:text-left'>
            <h1>Bhavyaa Narotambhai</h1>
            <p className='mb-0'>Superb app! You guys are great. Everything&apos;s at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What&apos;s not here?! You keep nothing hidden. Thank you very much, guys! Thanks a lot!</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 mb-4 md:mb-0 flex-none bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
          <div className='rounded-full overflow-hidden h-[160px] w-[160px] md:w-1/3 mb-4 md:mb-0'>
            <Image src={avatar2} alt='avatar2' height={160} width={160} />
          </div>
          <div className='md:w-[80%] text-center md:text-left'>
            <h1>Bhavyaa Narotambhai</h1>
            <p className='mb-0'>Superb app! You guys are great. Everything&apos;s at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What&apos;s not here?! You keep nothing hidden. Thank you very much, guys! Thanks a lot!</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row md:gap-4 lg:gap-8 overflow-x-hidden mt-10'>
        <div className="w-full md:w-1/2 p-2 mb-4 md:mb-0 flex-none bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
          <div className='rounded-full overflow-hidden h-[160px] w-[160px] md:w-1/3 mb-4 md:mb-0'>
            <Image src={avatar3} alt='avatar3' height={160} width={160} />
          </div>
          <div className='md:w-[80%] text-center md:text-left'>
            <h1>Bhavyaa Narotambhai</h1>
            <p className='mb-0'>Superb app! You guys are great. Everything&apos;s at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What&apos;s not here?! You keep nothing hidden. Thank you very much, guys! Thanks a lot!</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 mb-4 md:mb-0 flex-none bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
          <div className='rounded-full overflow-hidden h-[160px] w-[160px] md:w-1/3 mb-4 md:mb-0'>
            <Image src={avatar4} alt='avatar4' height={160} width={160} />
          </div>
          <div className='md:w-[80%] text-center md:text-left'>
            <h1>Bhavyaa Narotambhai</h1>
            <p className='mb-0'>Superb app! You guys are great. Everything&apos;s at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What&apos;s not here?! You keep nothing hidden. Thank you very much, guys! Thanks a lot!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
