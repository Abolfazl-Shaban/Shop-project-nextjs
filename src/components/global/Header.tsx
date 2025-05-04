'use client';

import Navbar from './Navbar';
import Link from 'next/link';
import { SiteUrl } from '../../../constant';
import { Menu, Search, ShoppingCartIcon, User2 } from 'lucide-react';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import Image from 'next/image';
import NavbarMenu from './NavbarMenu';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [stick, setStick] = useState<boolean | undefined>(undefined);

  const router = useRouter();
  const contetx = useCart();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    handleScroll();
    function handleScroll() {
      setStick(window.pageYOffset > 10);
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='mb-20'>
      <div
        className={`${stick ? 'border border-zinc-200 shadow md:w-[95%] md:rounded-b-2xl' : 'bg-background-100 w-full p-5'} fixed top-0 right-0 left-0 z-[5] mx-auto flex items-center justify-between gap-5 bg-white p-3 transition-all`}
      >
        <div className='w-1/3 shrink-[10]'>
          <div className='w-fit'>
            <Link className='bg-red-300' href={SiteUrl}>
              <p className='text-2xl font-bold'>
                <span className='text-primary-300 text-base'>ONLINE</span>SHOP
              </p>
            </Link>
          </div>
        </div>
        <Navbar className={`hidden lg:flex`} />
        <div className='flex w-1/3 items-center justify-end gap-2'>
          <div className='relative hidden md:block'>
            <Input className='w-full' placeholder={t('header.search')} />
            <Search className='absolute end-0.5 top-0.5 size-8 cursor-pointer border-s bg-white p-1.5 text-zinc-600' />
          </div>
          <div className='flex-center relative size-9 cursor-pointer rounded-md border p-1.5 text-zinc-800 transition-all hover:bg-zinc-100'>
            <ShoppingCartIcon onClick={() => router.push('/cart')} />
            {contetx && contetx.getCartItems().length > 0 && (
              <p className='bg-primary-100 flex-center absolute -top-1 -right-1 size-4 rounded-full text-xs text-white'>
                {contetx?.getCartItems().length}
              </p>
            )}
          </div>
          <User2
            onClick={() => router.push('/account')}
            className='size-9 cursor-pointer rounded-md border p-1.5 text-zinc-800 transition-all not-lg:hidden hover:bg-zinc-100'
          />

          <Sheet>
            <SheetTrigger className='lg:hidden'>
              <Menu className='size-9 rounded-md border p-1.5 text-zinc-800 transition-all hover:bg-zinc-100' />
            </SheetTrigger>
            <SheetContent
              side={i18n.language == 'en' ? 'left' : 'right'}
              onOpenAutoFocus={(e) => e.preventDefault()}
              autoFocus={false}
              className='p-2 [&>button:last-child]:hidden'
            >
              <SheetTitle>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Image
                      className='size-14 p-1'
                      src={'/logo.png'}
                      alt='logo'
                      width={256}
                      priority
                      height={256}
                    />
                    <p className='mt-2 text-2xl font-bold'>
                      <span className='text-primary-300 text-base'>ONLINE</span>
                      SHOP
                    </p>
                  </div>

                  <User2
                    onClick={() => router.push('/account')}
                    className='size-11 cursor-pointer rounded-full border p-1.5 text-zinc-600'
                  />
                </div>
              </SheetTitle>
              <form className='relative'>
                <Input
                  className='h-12 w-full'
                  placeholder={t('header.search')}
                />
                <Search className='focus absolute end-0.5 top-0.5 size-11 cursor-pointer border-s bg-white p-2.5 text-zinc-600' />
              </form>
              <NavbarMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
