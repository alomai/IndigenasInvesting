'use client';

import Image from 'next/image';

export default function InvestmentJourney() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
            Start Your Investment Journey with Indígenas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            Investing with Indígenas is simple and empowering. Follow our easy steps to start making a 
            difference in your community while growing your wealth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="text-center space-y-6">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <Image
                src="/journey/create-account.jpg"
                alt="Create your account"
                fill
                style={{ objectFit: 'cover' }}
                className="shadow-md"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-sans">Create Your Account in Minutes</h3>
            <p className="text-gray-600 font-sans">Sign up with your email and complete your profile.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-6">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <Image
                src="/journey/explore-opportunities.jpg"
                alt="Explore investment opportunities"
                fill
                style={{ objectFit: 'cover' }}
                className="shadow-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-sans">Explore Investment Opportunities Tailored for You</h3>
            <p className="text-gray-600 font-sans">Browse our curated marketplace of local businesses and projects.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-6">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <Image
                src="/journey/make-investment.jpg"
                alt="Make your first investment"
                fill
                style={{ objectFit: 'cover' }}
                className="shadow-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-sans">Make Your First Investment Today</h3>
            <p className="text-gray-600 font-sans">Choose an opportunity and invest as little as $10.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 font-medium transition-colors font-sans duration-300 border border-black hover:bg-white hover:text-black">
              Invest
            </button>
            <button className="border border-black text-black px-8 py-3 font-medium bg-transparent transition-colors font-sans duration-300 hover:bg-black hover:text-white">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
