'use client';

import Link from 'next/link';
import { navPaths } from '../../../constant';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const NavbarMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname().replace(/^\/(en|fa)/, '') || '/';
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-col', className)}>
      {navPaths.map((e, i) => (
        <Link
          key={i}
          href={e.path}
          className={`${e.path == pathname ? 'text-primary-200' : 'group'} relative border-b p-3 text-nowrap`}
        >
          {t(e.name)}
        </Link>
      ))}
    </div>
  );
};

export default NavbarMenu;
