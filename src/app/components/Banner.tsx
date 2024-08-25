import Image from 'next/image'
import bannerImg from '../assets/images/banner.svg'

function Banner() {
    return (
        <section className='relative w-full min-h-[200px] flex flex-col lg:flex-row items-center justify-between bg-cover bg-center px-6 lg:px-10 py-10' style={{ backgroundImage: `url(${bannerImg.src})` }}>
            <div className='text-center lg:text-left'>
                <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-4'>
                    Missing Trades Because of Outdated Data?
                </h1>
                <h2 className='font-medium text-xl sm:text-2xl lg:text-3xl mb-6'>
                    Get the Live Market Screening with Dynamic Filters
                </h2>
            </div>
            <div className='mt-6 lg:mt-0'>
                <div className='w-full lg:w-[166px] h-[62px] rounded-[8px] cursor-pointer hover:border-[#004063] hover:bg-none hover:border-2 group transition duration-300 ease-in bg-gradient-to-r from-[#537E95] to-[#004063] flex items-center justify-center'>
                    <p className='mb-0 text-lg text-white font-semibold group-hover:text-[#004063] transition duration-300 ease-in'>
                        Get Free Trial
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner;
