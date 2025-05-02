import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Edit3Icon } from 'lucide-react';
import Link from 'next/link';
import { MdOutlineChevronLeft } from 'react-icons/md';
import { userData } from '@/app/data/mockData';

const Account = () => {
  const user = userData.profile;
  return (
    <div>
      <h1 className='text font-bold'>حساب کاربری</h1>
      <div className='my-4 flex flex-wrap items-center gap-2'>
        <div className='shrink-0'>
          <Image
            className='size-24 not-md:size-16 rounded-full'
            src={'/images/user.png'}
            alt='profile'
            height={512}
            width={512}
          />
        </div>
        <div className='flex flex-wrap grow flex-col gap-2'>
          <p className='font-medium not-md:text-sm'>{user.name}</p>
          <p className='text-sm not-md:text-xs'>{user.email}</p>
        </div>
        <Link href={'/account/settings'} className='mr-auto'>
          <Button className='not-md:text-xs'>
            <Edit3Icon /> ویرایش اطلاعات
          </Button>
        </Link>
      </div>
      <h1 className='text mt-8 font-bold'>سفارشات اخیر</h1>
      <div className='mt-4 grid grid-cols-3 gap-2 p-2 text-center'>
        <div className='min-h-[85px] flex flex-col'>
          <p className='text-dark-200 font-medium not-md:text-sm'>درحال ارسال</p>
          <p className='text-dark-400 text-sm not-md:text-xs'>سفارشات ارسال شده</p>
          <p className='bg-primary-50/50 mx-auto mt-auto size-6 rounded-sm '>1</p>
        </div>
        <div className='min-h-[85px] flex flex-col'>
          <p className='text-dark-200 font-medium not-md:text-sm'>تحویل شده</p>
          <p className='text-dark-400 text-sm not-md:text-xs' >سفارشات تحوید داده شده</p>
          <p className='bg-primary-50/50 mx-auto size-6 rounded-sm mt-auto'>2</p>
        </div>
        <div className='min-h-[85px] flex flex-col'>
          <p className='text-dark-200 font-medium not-md:text-sm'>مرجوع شده</p>
          <p className='text-dark-400 text-sm not-md:text-xs'>سفارشات مرجوع داده شده</p>
          <p className='bg-primary-50/50 mx-auto mt-auto size-6 rounded-sm'>0</p>
        </div>
      </div>
      <Link
        className='text-primary-300 mr-auto flex w-[120px] items-center gap-0.5 text-sm transition-all hover:gap-1.5'
        href={'/account/orders'}
      >
        همه سفارشات <MdOutlineChevronLeft size={20} />
      </Link>
    </div>
  );
};

export default Account;
