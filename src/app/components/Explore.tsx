import Image from 'next/image'
import right from '../assets/images/arrow_right_alt.svg'

function Explore() {
    return (
        <div className='w-full min-h-[282px] py-[50px]'>
            <h1 className='text-center text-[40px] font-[700] uppercase tracking-tight'>The Ultimate Destination For Stock Market Insight</h1>
            <p className='text-center text-[18px] font-[400]'>Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.</p>
            <div className='mx-auto w-[200px] rounded-[4px] cursor-pointer h-[52px] border-[#333333] border flex items-center justify-center gap-3 group hover:group'>
                <p className='mb-0'>Explore Features</p>
                <div className='group-hover:rotate-[360deg] transition duration-1000 ease-out'>
                    <Image src={right} width={19} height={13} alt='right arror' />
                </div>
            </div>
        </div>
    )
}

export default Explore