'use client';
import Link from 'next/link';
import { navPaths } from '../../../constant';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = ({className} : {className?: string}) => {
  const pathname =  '/' + usePathname().split('/')[1];
  return (
    <div className={cn('flex items-center gap-3',className) }>
      {navPaths.map((e, i) => (
        <Link key={i} href={e.path} className={`${e.path == pathname ? 'text-primary-200 ' : 'group'} text-nowrap relative `}>
          {e.name}
          <div className={`${e.path == pathname ? 'w-full' : 'group-hover:w-full'} absolute rounded-md bg-primary-50 transition-all w-0 duration-300  mt-auto h-[3px]`}>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
