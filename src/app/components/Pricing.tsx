import right from '../assets/images/Vector.svg';
import wrong from '../assets/images/Subtract.svg';
import Image from 'next/image';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="font-bold text-3xl mb-12">Pricing Plan</h2>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2">
            {/* Plan 1: Compare Plans */}
            <div className="flex flex-col border border-gray-300">
              <div className="py-4 px-3 flex flex-col justify-center border-b border-gray-300">
                <h3 className="font-bold text-lg">Compare plans</h3>
                <p className="font-medium text-sm text-gray-600 text-start mt-2">
                  Choose your workspace plan according to your organizational plan.
                </p>
              </div>
              {[
                "Number of Users", 
                "Users Per Page", 
                "Includes essential features to get started", 
                "More advanced features for increased productivity", 
                "Customizable applications to meet your specific needs", 
                "Secure data storage", 
                "Email Support", 
                "24/7 Customer support", 
                "Analytics and reporting", 
                "Account management"
              ].map((item, index) => (
                <div key={`compare-${index}`} className="py-4 px-3 flex items-center border-b border-gray-300">
                  <p className="font-bold text-sm mb-0">{item}</p>
                </div>
              ))}
            </div>

            {/* Plan 2: Free Plan */}
            <div className="flex flex-col border border-gray-300">
              <div className="py-4 px-3 flex flex-col justify-center border-b border-gray-300">
                <h1 className="text-lg md:text-xl font-bold">
                  Free <span className="text-sm font-normal text-gray-500">/Lifetime</span>
                </h1>
                <div className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-full cursor-pointer hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border transition duration-300 ease-in text-sm md:text-base">
                  Create Free Account
                </div>
              </div>
              {[
                "1", 
                "5 Pages", 
                <Image src={right} height={20} width={20} alt="status" key="free-3" />, 
                <Image src={wrong} height={20} width={20} alt="status" key="free-4" />, 
                <Image src={wrong} height={20} width={20} alt="status" key="free-5" />, 
                <Image src={wrong} height={20} width={20} alt="status" key="free-6" />, 
                <Image src={wrong} height={20} width={20} alt="status" key="free-7" />, 
                <Image src={wrong} height={20} width={20} alt="status" key="free-8" />, 
                <Image src={wrong} height={20} width={20} alt="status" key="free-9" />, 
                <Image src={right} height={20} width={20} alt="status" key="free-10" />
              ].map((content, index) => (
                <div key={`free-${index}`} className="py-4 px-3 flex items-center justify-center border-b border-gray-300">
                  {content}
                </div>
              ))}
            </div>

            {/* Plan 3: Monthly Plan */}
            <div className="flex flex-col border border-gray-300">
              <div className="py-4 px-3 flex flex-col justify-center border-b border-gray-300">
                <h1 className="text-lg md:text-xl font-bold">
                  &#8377;849 <span className="text-sm font-normal text-gray-500">/Month</span>
                </h1>
                <div className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-full cursor-pointer hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border transition duration-300 ease-in text-sm md:text-base">
                  Login to Buy
                </div>
              </div>
              {[
                "3", 
                "50 Pages", 
                <Image src={right} height={20} width={20} alt="status" key="monthly-3" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-4" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-5" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-6" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-7" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-8" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-9" />, 
                <Image src={right} height={20} width={20} alt="status" key="monthly-10" />
              ].map((content, index) => (
                <div key={`monthly-${index}`} className="py-4 px-3 flex items-center justify-center border-b border-gray-300">
                  {content}
                </div>
              ))}
            </div>

            {/* Plan 4: Yearly Plan */}
            <div className="flex flex-col border border-gray-300">
              <div className="py-4 px-3 flex flex-col justify-center border-b border-gray-300">
                <h1 className="text-lg md:text-xl font-bold">
                  &#8377;4310 <span className="text-sm font-normal text-gray-500">/Year</span>
                </h1>
                <div className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-full cursor-pointer hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border transition duration-300 ease-in text-sm md:text-base">
                  Login to Buy
                </div>
              </div>
              {[
                "1", 
                <div key="yearly-2"><p className="font-normal text-sm">Unlimited</p><p className="font-normal text-xs text-gray-500">Paged Add-ons on Demand</p></div>, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-3" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-4" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-5" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-6" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-7" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-8" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-9" />, 
                <Image src={right} height={20} width={20} alt="status" key="yearly-10" />
              ].map((content, index) => (
                <div key={`yearly-${index}`} className="py-4 px-3 flex items-center justify-center border-b border-gray-300">
                  {content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
