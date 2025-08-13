import { getRequestConfig } from 'next-intl/server';

const localeMap: Record<string, () => Promise<any>> = {
  en: () => import('../locales/en.json'),
  es: () => import('../locales/es.json')
};

export default getRequestConfig(async ({ locale }) => {
  console.log(`ℹ️ [getRequestConfig] Received locale: ${locale || 'undefined'}`);
  
  if (!locale || !(locale in localeMap)) {
    console.error('❌ Locale is missing or invalid, falling back to "en"');
    return {
      locale: 'en',
      messages: (await localeMap.en()).default
    };
  }

  const messages = (await localeMap[locale]()).default;
  console.log(`✅ [getRequestConfig] Loaded messages for locale: ${locale}`);
  
  return {
    locale,
    messages
  };
});