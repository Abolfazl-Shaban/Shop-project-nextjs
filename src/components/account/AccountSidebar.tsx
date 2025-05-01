'use client';
import { ListOrdered, LogOut, Settings2, User2Icon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AccountSidebar = () => {
  const paths = [
    { name: 'حساب کاربری', path: '/account', icon: <User2Icon /> },
    { name: 'سفارشات', path: '/account/orders', icon: <ListOrdered /> },
    { name: 'تنظیمات', path: '/account/settings', icon: <Settings2 /> },
    { name: 'خروج', path: '/account/logout', icon: <LogOut /> },
  ];

  const pathname = usePathname();

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
              <span className={`${pathname == item.path ? 'text-dark-100' : 'text-dark-400'}`}>{item.name}</span>
              {pathname == item.path && (
                <div className=' bg-primary-100 absolute right-0 -mr-0.5 h-2/3 w-[5px] rounded-sm'></div>
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
