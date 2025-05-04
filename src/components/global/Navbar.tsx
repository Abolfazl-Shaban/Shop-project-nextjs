'use client';

import Link from 'next/link';
import { navPaths } from '../../../constant';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const Navbar = ({ className }: { className?: string }) => {
  const pathname =   usePathname().replace(/^\/(en|fa)/, '') || '/';

  const { t } = useTranslation();

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {navPaths.map((e, i) => (
        <Link
          key={i}
          href={e.path}
          className={`${e.path == pathname ? 'text-primary-200' : 'group'} relative text-nowrap`}
        >
          {t(e.name)}
          <div
            className={`${e.path == pathname ? 'w-full' : 'group-hover:w-full'} bg-primary-50 absolute mt-auto h-[3px] w-0 rounded-md transition-all duration-300`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
