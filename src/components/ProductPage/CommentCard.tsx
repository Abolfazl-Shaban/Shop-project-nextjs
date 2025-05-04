'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const CommentCard = () => {
  const { t } = useTranslation();
  return (
    <div className='my-2 flex rounded-2xl p-2'>
      <div className='w-[80px] not-lg:w-[70px]'>
        <Image
          className='size-16 rounded-full not-lg:size-14'
          src={'/images/person1.jpg'}
          width={512}
          height={512}
          priority
          alt='profile'
        />
      </div>
      <div className='grow'>
        <p className='text-base font-medium'>
          <span className=''>Soheil</span>
          <span className='text-dark-300 absolute px-2 text-xs'>
            {t('product.month-ago', {
              value: '1',
            })}
          </span>
        </p>
        <p className='text-dark-300 mt-3 text-sm'>
          خوش قیمت و به صرفه٬ پیشنهاد میکنم بخرید
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
