import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../i18n/locales/en.json';
import fa from '../../i18n/locales/fa.json';

export const createClientI18n = async (lng: string) => {
  await i18n.use(initReactI18next).init({
    lng,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
};
