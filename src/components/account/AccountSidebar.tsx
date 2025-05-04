'use client';
import { ListOrdered, LogOut, Settings2, User2Icon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const AccountSidebar = () => {
  const paths = [
    {
      name: 'حساب کاربری',
      Ename: 'General',
      path: '/account',
      icon: <User2Icon />,
    },
    {
      name: 'سفارشات',
      Ename: 'Orders',
      path: '/account/orders',
      icon: <ListOrdered />,
    },
    {
      name: 'تنظیمات',
      Ename: 'Settings',
      path: '/account/settings',
      icon: <Settings2 />,
    },
    {
      name: 'خروج',
      Ename: 'LogOut',
      path: '/account/logout',
      icon: <LogOut />,
    },
  ];

  const pathname = usePathname().replace(/^\/(en|fa)/, '') || '/';
  const { i18n } = useTranslation();

  return (
    <div className='flex flex-col'>
      {paths.map((item, index) => (
        <div key={index}>
          <Link
            href={item.path}
            key={index}
            className={`relative flex cursor-pointer items-center gap-2 overflow-hidden px-4 py-4 text-sm font-medium`}
          >
            <span className=''>{item.icon}</span>
            <span
              className={`${pathname == item.path ? 'text-black' : 'text-dark-400'}`}
            >
              {i18n.language == 'en' ? item.Ename : item.name}  
            </span>
            {pathname == item.path && (
              <div className='bg-primary-100 absolute start-0 -ms-1 h-2/3 w-[8px] rounded-sm'></div>
            )}
          </Link>
          {index !== paths.length - 1 && (
            <hr className='mx-auto w-[90%] border-zinc-200' />
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountSidebar;
