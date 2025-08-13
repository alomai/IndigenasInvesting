'use client';

import { Check } from 'lucide-react';

export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      description: 'Invest in local businesses',
      price: '$5–$50',
      features: [
        'Estimated Returns: 5–8%',
        'Basic voting on project launches (via digital tokens)',
        'Free educational workshops'
      ]
    },
    {
      name: 'Builder', 
      description: 'Access real estate shares',
      price: '$50–$500',
      features: [
        'Estimated Returns: 8–10%',
        'Co-ownership of real estate projects',
        'Dashboard to track your impact (e.g. anti-gentrification stats)',
        'Priority voting rights'
      ]
    },
    {
      name: 'Changemaker',
      description: 'Premium support and insights', 
      price: '$500+',
      features: [
        'Estimated Returns: 10–12%',
        'Long-term return potential',
        'Early access to top-performing opportunities',
        'Personalized dashboards',
        'Real-time earnings tracking'
      ]
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
            From $5 to Forever: Every Dollar Builds a Stronger Island.
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Build Wealth and Community–One Tier at a Time
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="border border-black p-8 space-y-6 bg-white"
            >
              {/* Title */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans">{tier.name}</h3>
                <p className="text-sm text-gray-600 font-sans">{tier.description}</p>
              </div>

              {/* Top divider */}
              <hr className="border-black" />

              {/* Price */}
              <div className="text-4xl font-bold text-gray-900 font-sans">{tier.price}</div>

              {/* Bottom divider */}
              <hr className="border-black" />

              {/* Button */}
              <button className="w-full bg-black text-white py-3 font-medium font-sans border border-black hover:bg-white hover:text-black transition-colors duration-300">
                Get started
              </button>

              {/* Features */}
              <div className="space-y-3">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-900 font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
