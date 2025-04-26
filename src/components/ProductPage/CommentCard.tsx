import Image from 'next/image';

const CommentCard = () => {
  return (
    <div className='flex my-2 p-2 rounded-2xl '>
      <div className='w-[80px] not-lg:w-[70px]'>
        <Image
        className='size-16 not-lg:size-14 rounded-full'
          src={'/images/person1.jpg'}
          width={512}
          height={512}
          priority
          alt='profile'
        />
      </div>
      <div className='grow'>
            <p className='text-base font-medium'>سهیل احمدی <span className='text-xs text-dark-300 px-2'>1 ماه پیش</span></p>
            <p className='text-dark-300 mt-3 text-sm'>خوش قیمت و به صرفه٬ پیشنهاد میکنم بخرید</p>
      </div>
    </div>
  );
};

export default CommentCard;
