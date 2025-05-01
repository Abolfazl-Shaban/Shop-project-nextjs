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

const Footer = () => {
  return (
    <div className='relative mt-30'>
      <div className='bg-primary-100 px-4 absolute -top-14 left-0 flex w-2/3 flex-wrap items-center justify-evenly gap-1 py-2 not-sm:-top-[85px] not-sm:h-[85px] not-md:w-full md:rounded-tr-full'>
        <p className='text-wrap text-zinc-50'>
          از تخفیف ها و امتیاز ها با خبر شوید.
        </p>
        <div className='relative grow max-w-[300px] lg:w-[350px]'>
          <Input
            className='w-full rounded-full bg-white p-5 text-sm '
            placeholder='ایمیل خود را وارد کنید'
          />
          <div className='absolute top-0 bottom-0 left-1 flex-center'>
            <Button className='bg-primary-100 rounded-full py-3 not-lg:text-xs text-white'>
              ارسال
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-w-full relative flex flex-wrap justify-between gap-6 bg-[#1D1D1B] p-10 pt-28'>
        <div className='-mt-24 flex  max-w-[400px] grow flex-col items-center gap-2 md:-mt-40'>
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
          <p className='text-sm  font-light text-zinc-200'>
            بزرگترین فروشگاه اینترنتی در تمام ایران
          </p>
          <div className='mt-6 flex flex-wrap w-fit gap-3'>
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
        </div>
        <div className='w-[150px]'>
          <span className='text-primary-50 font-medium'>لینک های مفید</span>
          <div className='flex list-disc flex-col gap-1 p-1 px-2 font-light text-zinc-200'>
            <Link
              href={'/'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>خانه</span>
            </Link>
            <Link
              href={'/products'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>فروشگاه</span>
            </Link>
            <Link
              href={'/cart'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>سبد خرید</span>
            </Link>
            <Link
              href={'/checkout'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>تسویه حساب</span>
            </Link>
          </div>
        </div>
        <div className='w-[150px]'>
          <span className='text-primary-50 font-medium'>دسته بندی ها</span>
          <ul className='flex list-disc flex-col gap-1 p-1 px-2 font-light text-zinc-100'>
            <Link
              href={'/products#category=electric'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>الکترونیکی</span>
            </Link>
            <Link
              href={'/products#category=clothing'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft />
              <span>پوشاک</span>
            </Link>
            <Link
              href={'/products#category=kitchen'}
              className='flex items-center gap-0 transition-all hover:gap-1 hover:text-white'
            >
              <MdChevronLeft /> <span>خانه و اشپزخانه</span>
            </Link>
          </ul>
        </div>
        <div className='w-[200px]'>
          <span className='text-primary-50 font-medium'>تماس باما</span>
          <ul className='flex list-disc flex-col gap-1 p-1 px-2 font-light text-zinc-100'>
            <Link
              href={'tel:09154442081'}
              className='flex items-center gap-1 transition-all hover:gap-2 hover:text-white'
            >
              <FaPhone /> <span className='font-[vazir]'>09154442081</span>
            </Link>
            <Link
              href={'https://t.me/AbolfazlShaban08'}
              className='flex items-center gap-1 transition-all hover:gap-2 hover:text-white'
            >
              <FaTelegramPlane /><p className='text-balance'>@AbolfazlShaban08</p>
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
        <p className='text-zinc-200 text-center text-sm'>تمامی حقوق وب سایت برای <a className='text-primary-50' href={SiteUrl}> فروشگاه انلاین شاپ </a>محفوظ است.</p>
      </div>
    </div>
  );
};

export default Footer;
