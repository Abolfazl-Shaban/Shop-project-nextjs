import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Edit3Icon } from 'lucide-react';
import Link from 'next/link';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { userData } from '@/app/data/mockData';
import { getTranslation } from '@/i18n/i18n-server';

const Account = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const t = await getTranslation((await params).locale);
  const user = userData.profile;

  return (
    <div>
      <h1 className='text font-bold'>{t('account.title')}</h1>
      <div className='my-4 flex flex-wrap items-center gap-2'>
        <div className='shrink-0'>
          <Image
            className='size-24 rounded-full not-md:size-16'
            src={'/images/user.png'}
            alt='profile'
            height={512}
            width={512}
          />
        </div>
        <div className='flex grow flex-col flex-wrap gap-2'>
          <p className='font-medium not-md:text-sm'>{user.name}</p>
          <p className='text-sm not-md:text-xs'>{user.email}</p>
        </div>
        <Link href={'/account/settings'} className='mr-auto'>
          <Button className='not-md:text-xs'>
            <Edit3Icon />
            {t('account.edit')}
          </Button>
        </Link>
      </div>

      <h1 className='text mt-8 font-bold'>{t('account.ordersTitle')}</h1>
      <div className='mt-4 grid grid-cols-3 gap-2 p-2 text-center'>
        <div className='flex min-h-[85px] flex-col'>
          <p className='text-dark-200 font-medium not-md:text-sm'>
            {t('account.orderStatus.sending')}
          </p>
          <p className='text-dark-400 text-sm not-md:text-xs'>
            {t('account.orderStatus.sendingDesc')}
          </p>
          <p className='bg-primary-50/50 mx-auto mt-auto size-6 rounded-sm'>
            1
          </p>
        </div>
        <div className='flex min-h-[85px] flex-col'>
          <p className='text-dark-200 font-medium not-md:text-sm'>
            {t('account.orderStatus.delivered')}
          </p>
          <p className='text-dark-400 text-sm not-md:text-xs'>
            {t('account.orderStatus.deliveredDesc')}
          </p>
          <p className='bg-primary-50/50 mx-auto mt-auto size-6 rounded-sm'>
            2
          </p>
        </div>
        <div className='flex min-h-[85px] flex-col'>
          <p className='text-dark-200 font-medium not-md:text-sm'>
            {t('account.orderStatus.returned')}
          </p>
          <p className='text-dark-400 text-sm not-md:text-xs'>
            {t('account.orderStatus.returnedDesc')}
          </p>
          <p className='bg-primary-50/50 mx-auto mt-auto size-6 rounded-sm'>
            0
          </p>
        </div>
      </div>
      <Link
        className='text-primary-300 ms-auto flex w-[120px] items-center gap-0.5 text-sm transition-all hover:gap-1.5'
        href={'/account/orders'}
      >
        {t('account.allOrders')}
      {(await params).locale== 'en' ?<MdOutlineChevronRight size={20} /> :  <MdOutlineChevronLeft size={20} /> }
       
      </Link>
    </div>
  );
};

export default Account;
