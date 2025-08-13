'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    // Remove current locale from pathname
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.replace(newPath);
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded ${currentLocale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
      <button 
        onClick={() => switchLocale('es')}
        className={`px-3 py-1 rounded ${currentLocale === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        ES
      </button>
    </div>
  );
}
