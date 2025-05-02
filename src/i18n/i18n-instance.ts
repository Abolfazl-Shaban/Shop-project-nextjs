import i18next from 'i18next';

import en from './locales/en.json';
import fa from './locales/fa.json';

export const createI18nInstance = (lng: string) => {
  return i18next.createInstance({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng,
    fallbackLng: 'fa',
    supportedLngs: ['fa', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });
};
