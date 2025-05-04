'use client';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const LogOut = () => {
  const { t } = useTranslation();
  return (
    <div className='flex-center h-full w-full gap-2'>
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text font-bold'>{t('account.logout.title')}</h1>
        <p className='text-sm text-zinc-500'>
          {t('account.logout.confirmation')}
        </p>
        <div className='mt-2 grid grid-cols-2 gap-2'>
          <Button variant={'ghost'}>{t('account.logout.no')}</Button>
          <Button>{t('account.logout.yes')}</Button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
