import { Metadata } from 'next';
import { getTranslation } from '@/i18n/i18n-server';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'صفحه مورد نظر یافت نشد',
    description:
      'صفحه‌ای که به دنبال آن بودید پیدا نشد. لطفاً به صفحه اصلی بازگردید.',
    robots: {
      index: false,
      follow: false,
    },
  };
}

const NotFoundPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const t = await getTranslation((await params).locale);

  return (
    <div className='flex-center container mx-auto h-[80vh] w-full'>
      <div className='flex w-full items-center justify-center gap-10 not-lg:flex-col-reverse'>
        <div className='w-[500px] not-lg:w-full not-lg:text-center'>
          <h2 className='text-dark-200 text-2xl font-bold not-lg:text-xl'>
            {t('notfound.title')}
          </h2>
          <p className='text-dark-300 mt-2 font-medium lg:text-lg'>
            {t('notfound.desc')}
          </p>
          <Button className='mt-4 text-base' variant={'default'}>
            {t('notfound.back')}
          </Button>
        </div>
        <div className='flex-center w-[400px] not-lg:w-[300px]'>
          <Image
            className='w-full select-none'
            src={'/images/404.png'}
            alt='404'
            height={1024}
            width={1024}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
