'use client';

import Image from 'next/image';

export default function CommunityInvestmentSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-2">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight font-sans mb-6">
              Invest in Your Community,<br />
              Shape Your Future
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-sans mb-16">
              Micro-investing with Indígenas allows you to support local businesses while building wealth. 
              Your contributions directly impact the community and foster economic growth.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 font-sans mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Invest small amounts with big community impact.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900 font-sans mb-2">
                  Community
                </h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Join a movement that values local connections.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-black text-white font-medium transition-colors font-sans duration-300 border border-black hover:bg-white hover:text-black">
                Learn More
              </button>
              <button className="px-8 py-3 border text-gray-900 font-medium transition-colors font-sans flex items-center duration-300 border border-black hover:bg-black hover:text-white">
                Sign Up
                <svg 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/community-investment/community-celebration.jpg"
              alt="Community celebration with people gathered in a town square with flags and festivities"
              className="shadow-lg"
              width={1400}      // Match your max container width
              height={700}      // Match the h-[700px] height you had
              style={{ objectFit: 'cover', width: '100%', height: '700px' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
