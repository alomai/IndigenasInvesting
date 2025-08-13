'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-16 font-sans leading-snug">
          Discover the power of community-driven <br />
          investing with Indígenas.
        </h2>

        {/* Grid layout: 1 col on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {/* Card 1 */}
          <div className="flex flex-col h-full text-center items-center">
            <Image
  src="/features/for-rent.jpg"
  alt="Empower investments"
  width={400}
  height={280}
  className="object-cover mb-6 shadow-md"
/>

            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-sans">
              Empower your investments and support local businesses in Puerto Rico.
            </h3>
            <p className="text-base leading-relaxed text-gray-700 mb-6 font-sans">
              Our platform offers a curated marketplace for micro-investing in local projects.
            </p>
            <a
              href="#learn-more"
              className="mt-auto inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm font-medium transition-colors font-sans rounded-none duration-300 border border-black hover:bg-white hover:text-black"
            >
              Learn More &gt;
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full text-center items-center">
            <Image
  src="/features/education.jpg"
  alt="Education resources"
  width={400}
  height={280}
  className="object-cover mb-6 shadow-md"
/>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-sans">
              Gain financial knowledge with our tailored educational resources for investors.
            </h3>
            <p className="text-base leading-relaxed text-gray-700 mb-6 font-sans">
              We provide financial education to help you make informed investment decisions.
            </p>
            <a
              href="#sign-up"
              className="mt-auto inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm font-medium transition-colors font-sans rounded-none duration-300 border border-black hover:bg-white hover:text-black"
            >
              Sign Up &gt;
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full text-center items-center">
            <Image
  src="/features/financial-report.jpg"
  alt="Track impact"
  width={400}
  height={280}
  className="object-cover mb-6 shadow-md"
/>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-sans">
              Track your impact with transparent reporting on financial outcomes.
            </h3>
            <p className="text-base leading-relaxed text-gray-700 mb-2 font-sans">
              Our platform ensures you can see the real impact of your investments.
            </p>
            <a
              href="#explore"
              className="mt-auto inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm font-medium transition-colors font-sans rounded-none duration-300 border border-black hover:bg-white hover:text-black"
            >
              Explore &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
