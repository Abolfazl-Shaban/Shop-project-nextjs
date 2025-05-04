'use client';

import i18n from '@/i18n/i18n';
import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

export default function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale).then(() => {
        setReady(true);
      });
    } else {
      setReady(true);
    }
  }, [locale]);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
