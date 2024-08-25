// src/components/Features.tsx
import Image from 'next/image';
import Link from '../assets/images/link.svg'
import trouble from '../assets/images/troubleshoot.svg'
import query from '../assets/images/query_stats.svg'
import find from '../assets/images/find_in_page.svg'
export default function Features() {
  return (
    <section id="features" className="py-12 w-full">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="p-4 rounded-lg h-[240px] group hover:group">
            <div className='mb-6 group-hover:text-[#4399EB]'>
              <Image src={trouble} height={25} width={50} alt='link' color='#333333'/>
            </div>
            <h3 className="text-[18px] font-[600] group-hover:text-[#4399EB] transition-all">Advanced Stock Screener</h3>
            <p className='text-[12px] font-[400] text-[#999999] group-hover:text-[#4399EB] transition-all'>Access advanced flters like volume shockers, price action, range breakout, opening price  clues, and more for efcient stock screening.</p>
          </div>
          <div className="p-4 rounded-lg h-[240px] group hover:group">
            <div className='mb-6'>
              <Image src={query} height={25} width={50} alt='link' color='#333333'/>
            </div>
            <h3 className="text-[18px] font-[600] group-hover:text-[#4399EB] transition-all">Live Market Screener</h3>
            <p className='text-[12px] font-[400] text-[#999999] group-hover:text-[#4399EB] transition-all'>Access real-time market data and  dynamic flters to ensure timely trades  without outdated information.</p>
          </div>
          <div className="p-4 rounded-lg h-[240px] group hover:group">
            <div className='mb-6'>
              <Image src={find} height={25} width={50} alt='link' color='#333333'/>
            </div>
            <h3 className="text-[18px] font-[600] group-hover:text-[#4399EB] transition-all">Options Screener</h3>
            <p className='text-[12px] font-[400] text-[#999999] group-hover:text-[#4399EB] transition-all'>Quickly identify optimal trading  opportunities in the options market with  our real-time data and advanced flters.</p>
          </div>
          <div className="p-4 rounded-lg h-[240px] group hover:group">
            <div className='mb-6'>
              <Image src={Link} height={25} width={50} alt='link' color='#333333'/>
            </div>
            <h3 className="text-[18px] font-[600] group-hover:text-[#4399EB] transition-all">Advanced Option Chain</h3>
            <p className='text-[12px] font-[400] text-[#999999] group-hover:text-[#4399EB] transition-all'>Stay ahead with highlighted data on  Greeks, PCR, Vol PCR, and Expected  Range for the Day feature for  confdent target setting.</p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
