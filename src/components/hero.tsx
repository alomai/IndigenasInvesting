'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const desktopItem: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  const mobileItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <>
      {/* Desktop Hero */}
      <section className="hidden md:flex min-h-screen bg-white">
        {/* Left - Text */}
        <div className="w-1/2 flex items-center justify-center h-full">
          <motion.div
            className="w-[586px] pt-32"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={desktopItem}
              className="text-[4rem] font-bold leading-tight text-black mb-6 font-sans text-left"
            >
              {t('title.line1')} <br />
              {t('title.line2')}
            </motion.h1>

            <motion.p
              variants={desktopItem}
              className="text-xl leading-[1.7rem] text-gray-600 mb-10 font-sans text-left"
            >
              {t('description')}
            </motion.p>

            <motion.div
              variants={desktopItem}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <button className="bg-black text-white px-8 py-3 font-medium transition-colors font-sans duration-300 border border-black hover:bg-white hover:text-black">
                {t('buttons.explore')}
              </button>
              <button className="border border-black text-black px-8 py-3 font-medium bg-transparent transition-colors font-sans duration-300 hover:bg-black hover:text-white">
                {t('buttons.learnMore')}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="w-1/2 h-full">
          <img
            src="/hero/puerto-rico-hero.jpg"
            alt="Beautiful mountains of Puerto Rico"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="flex md:hidden relative min-h-screen">
        <img
          src="/hero/puerto-rico-hero.jpg"
          alt="Beautiful mountains of Puerto Rico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-50"></div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={mobileItem}
            className="text-7xl font-bold text-black mb-4"
          >
            {t('title.line1')}
          </motion.h1>
          <motion.h1
            variants={mobileItem}
            className="text-7xl font-bold text-black mb-8"
          >
            {t('title.line2')}
          </motion.h1>
          <motion.p
            variants={mobileItem}
            className="text-xl text-black mb-8"
          >
            {t('description')}
          </motion.p>

          <motion.div
            variants={mobileItem}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <button className="bg-black text-white px-8 py-3 font-medium transition-colors font-sans duration-300 border border-black hover:bg-white hover:text-black">
              {t('buttons.explore')}
            </button>
            <button className="border border-black text-black px-8 py-3 font-medium bg-transparent transition-colors font-sans duration-300 hover:bg-black hover:text-white">
              {t('buttons.learnMore')}
            </button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
