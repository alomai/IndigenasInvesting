import { getRequestConfig } from 'next-intl/server';

const localeMap: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('../locales/en.json'),
  es: () => import('../locales/es.json'),
};

export default getRequestConfig(async ({ locale }) => {
  console.log(`ℹ️ [getRequestConfig] Received locale: ${locale || 'undefined'}`);

  if (!locale || !(locale in localeMap)) {
    console.error('❌ Locale is missing or invalid, falling back to "en"');
    const enMessages = await localeMap.en();
    return {
      locale: 'en',
      messages: enMessages.default,
    };
  }

  const messagesImport = await localeMap[locale]();
  console.log(`✅ [getRequestConfig] Loaded messages for locale: ${locale}`);

  return {
    locale,
    messages: messagesImport.default,
  };
});
