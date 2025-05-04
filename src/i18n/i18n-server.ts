// lib/i18n/server.ts
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export async function getTranslation(lang: string) {
  const instance = i18next.createInstance();
  
  await instance
    .use(resourcesToBackend(
      (language: string) => import(`./locales/${language}.json`)
    ))
    .init({
      lng: lang,
      fallbackLng: 'fa',
      initImmediate: false
    });

  return instance.t;
}