'use client';

import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    Cookies.set('language', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('fa')}>فارسی</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}