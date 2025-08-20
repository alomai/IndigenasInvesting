'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section
      className="bg-black w-full py-20 px-6 md:px-12"
      style={{ backgroundColor: 'black' }}
    >
      <div className="max-w-7xl mx-auto !text-white">
        {/* Heading */}
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">
  Get in Touch
          </h2>
          <p className="text-lg text-white">We'd love to hear from you</p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Email */}
          <div>
            <Mail className="w-10 h-10 mb-4 stroke-[1.5]" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <a href="mailto:email@example.com" className="block mt-2 underline">
              email@example.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <Phone className="w-10 h-10 mb-4 stroke-[1.5]" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <a href="tel:+15550000000" className="block mt-2 underline">
              +1 (555) 000-0000
            </a>
          </div>

          {/* Office */}
          <div>
            <MapPin className="w-10 h-10 mb-4 stroke-[1.5]" />
            <h3 className="text-xl font-semibold">Office</h3>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 underline"
            >
              123 Sample St, Sydney NSW 2000 AU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}