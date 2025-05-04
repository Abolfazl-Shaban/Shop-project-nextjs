'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegramPlane,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdChevronLeft } from 'react-icons/md';
import { RiTelegram2Fill } from 'react-icons/ri';
import { SiAparat } from 'react-icons/si';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SiteUrl } from '../../../constant';
import { Trans, useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: 'fa' | 'en') => {
    const newPath = pathname.replace(/^\/(fa|en)/, '');
    const finalPath = `/${lng}${newPath === '' ? '/' : newPath}`;
    router.push(finalPath);
    router.refresh();
  };
  return (
    <div className='relative mt-30'>
      <div className='bg-primary-100 absolute end-0 -top-14 flex w-2/3 flex-wrap items-center justify-evenly gap-1 px-4 py-2 not-sm:-top-[85px] not-sm:h-[85px] not-md:w-full md:rounded-ss-full'>
        <p className='text-wrap text-zinc-50'>{t('footer.discount-msg')}</p>
        <div className='relative max-w-[300px] grow lg:w-[350px]'>
          <Input
            className='w-full rounded-full bg-white p-5 text-sm'
            placeholder={t('footer.enter-email')}
          />
          <div className='flex-center absolute end-1 top-0 bottom-0'>
            <Button className='bg-primary-100 rounded-full py-3 text-white not-lg:text-xs'>
              {t('footer.submit-email')}
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-w-full relative flex flex-wrap justify-between gap-6 bg-[#1D1D1B] p-10 pt-28'>
        <div className='-mt-24 flex max-w-[400px] grow flex-col items-center gap-2 not-md:mx-auto not-md:w-full md:-mt-40'>
          <Image
            className='size-20 rounded-full bg-white p-1.5'
            src={'/logo.png'}
            alt='logo'
            width={256}
            priority
            height={256}
          />
          <p className='text-2xl font-bold text-white'>
            <span className='text-primary-300 text-base'>ONLINE</span>SHOP
          </p>
          <p className='text-sm font-light text-zinc-200'>{t('footer.desc')}</p>
          <div className='mt-6 flex w-fit flex-wrap gap-3'>
            <Link href={'https://t.me/AbolfazlShaban08'}>
              <RiTelegram2Fill className='size-7 p-1 text-white' />
            </Link>
            <Link href={'https://www.linkedin.com/in/abolfazlshaban/'}>
              <FaLinkedin className='size-7 p-1 text-white' />
            </Link>
            <Link href={'https://github.com/Abolfazl-Shaban'}>
              <FaGithub className='size-7 p-1 text-white' />
            </Link>
            <Link href={'#'}>
              <SiAparat className='size-7 p-1 text-white' />
            </Link>
            <Link href={'#'}>
              <FaYoutube className='size-7 p-1 text-white' />
            </Link>
            <Link href={'#'}>
              <FaInstagram className='size-7 p-1 text-white' />
            </Link>
          </div>
          <div className='flex-center w-full gap-2'>
            <Image
              className='size-20 p-1'
              src={'/images/enamad-logo.png'}
              alt='enamad'
              width={256}
              priority={false}
              height={256}
            />
            <Image
              className='size-20'
              src={'/images/samandehi.png'}
              alt='samandehi'
              width={256}
              priority={false}
              height={256}
            />
          </div>
          <div>
            <Select
              onValueChange={changeLanguage}
              defaultValue={i18n.language}
            >
              <SelectTrigger className='w-full border-zinc-700 text-zinc-200'>
                <SelectValue placeholder='Select Language' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='en'>English</SelectItem>
                <SelectItem value='fa'>فارسی</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='w-[150px]'>
          <span className='text-primary-50 font-medium'>
            {t('footer.useful-links')}
          </span>
          <div className='flex list-disc flex-col gap-1 p-1 px-2 font-light text-zinc-200'>
            <Link
              href={'/'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>{t('footer.links.home')}</span>
            </Link>
            <Link
              href={'/products'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>{t('footer.links.shop')}</span>
            </Link>
            <Link
              href={'/cart'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>{t('footer.links.cart')}</span>
            </Link>
            <Link
              href={'/checkout'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>{t('footer.links.checkout')}</span>
            </Link>
          </div>
        </div>
        <div className='w-[180px]'>
          <span className='text-primary-50 font-medium'>
            {t('footer.categories-title')}
          </span>
          <ul className='flex list-disc flex-col gap-1 p-1 px-2 font-light text-zinc-100'>
            <Link
              href={'/products#category=electric'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>{t('footer.categories.electric')}</span>
            </Link>
            <Link
              href={'/products#category=clothing'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft />
              <span>{t('footer.categories.clothing')}</span>
            </Link>
            <Link
              href={'/products#category=kitchen'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>{t('footer.categories.kitchen')}</span>
            </Link>
          </ul>
        </div>
        <div className='w-[180px]'>
          <span className='text-primary-50 font-medium'>
            {t('footer.contact-us')}
          </span>
          <ul className='flex list-disc flex-col gap-1 p-1 px-2 font-light text-zinc-100'>
            <Link
              href={'tel:09154442081'}
              className='flex items-center gap-1 transition-all hover:gap-2 hover:text-white'
            >
              <FaPhone /> <span className=''>09154442081</span>
            </Link>
            <Link
              href={'https://t.me/AbolfazlShaban08'}
              className='flex items-center gap-1 transition-all hover:gap-2 hover:text-white'
            >
              <FaTelegramPlane />
              <p className='text-balance'>@AbolfazlShaban08</p>
            </Link>
            <Link
              href={'#'}
              className='flex items-center gap-1 transition-all hover:gap-2 hover:text-white'
            >
              <FaLocationDot /> <span>مشهد, بلوارتوس</span>
            </Link>
          </ul>
        </div>
      </div>
      <div className='flex-center h-[70px] w-full bg-[#141414] p-5'>
        <p className='text-center text-sm text-zinc-200'>
          <Trans
            i18nKey='footer.copyright'
            components={[
              <Link key='0' className='text-primary-50' href={SiteUrl} />,
            ]}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
