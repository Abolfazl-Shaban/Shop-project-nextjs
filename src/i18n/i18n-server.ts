import { createI18nInstance } from './i18n-instance';

export async function getServerI18n(lng: string) {
  const instance = createI18nInstance(lng);
  await instance.init();
  return instance;
}