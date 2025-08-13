'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  const t = useTranslations('callToAction');

  return (
    <section 
      className="h-[413px] bg-cover bg-center bg-no-repeat flex items-center relative"
      style={{ backgroundImage: "url('/call-to-action/cta-background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 whitespace-nowrap leading-tight tracking-tight">
            {t('heading')}
          </h2>

          <p className="text-lg text-white mb-8 whitespace-nowrap max-w-2xl">
            {t('subheading')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
  <Button className="bg-white text-black px-8 py-3 rounded-none font-sans font-medium transition-colors">
    {t('signUp')}
  </Button>
  <Button
    variant="outline"
    className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-none font-sans font-medium transition-colors"
  >
    {t('learnMore')}
  </Button>
</div>
        </div>
      </div>
    </section>
  );
}
