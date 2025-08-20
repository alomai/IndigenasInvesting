'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 

export default function TestimonialSection() {
  const t = useTranslations('testimonials');
  const testimonials = [
    {
      quote: t('1.quote'),
      name: t('1.name'),
      title: t('1.title'),
    },
    {
      quote: t('2.quote'),
      name: t('2.name'),
      title: t('2.title'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2
             w-12 h-12 rounded-full bg-white border border-black 
             flex items-center justify-center ml-2
             hover:bg-black transition-colors duration-300"
            >
          <ArrowLeft className="h-5 w-5 text-black hover:text-white transition-colors duration-300" />
        </button>


            <div className="space-y-8">
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </div>

           <button
  onClick={nextTestimonial}
  aria-label="Next testimonial"
  className="absolute right-0 top-1/2 -translate-y-1/2  
             w-12 h-12 rounded-full bg-white border border-black 
             flex items-center justify-center mr-2
             hover:bg-black transition-colors duration-300"
>
  <ArrowRight className="h-5 w-5 text-black hover:text-white transition-colors duration-300" />
</button>

          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
