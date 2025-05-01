'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { userData } from '@/app/data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Settings = () => {
  const user = userData.profile;
  const [imgPreview, setImgPreview] = useState('/images/user.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImgPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2 className='text font-bold'>تنظیمات حساب</h2>
      <div className='mt-4 grid grid-cols-2 gap-8'>
        <div className='relative flex flex-col items-center'>
          <Image
            src={imgPreview}
            alt='Profile'
            width={120}
            height={120}
            className='size-32 origin-center cursor-pointer rounded-full object-cover shadow-lg transition hover:opacity-80'
            onClick={handleImageClick}
          />
          <p
            className='text-primary-200 mt-2 cursor-pointer text-sm hover:underline'
            onClick={handleImageClick}
          >
            تغییر عکس
          </p>
          <Input
            type='file'
            accept='image/*'
            className='hidden'
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>

        <div className='my-auto w-full max-w-sm pb-8'>
          <label className='text-sm font-medium'>نام</label>
          <Input
            placeholder='نام نمایشی'
            type='text'
            defaultValue={user.name}
            className='w-full'
          />
        </div>
        <div className='my-auto w-full max-w-sm '>
          <label className='text-sm font-medium'>ایمیل</label>
          <Input
            placeholder='ایمیل شما'
            type='email'
            defaultValue={user.email}
            className='w-full'
          />
        </div>
        <div className='my-auto w-full max-w-sm '>
          <label className='text-sm font-medium'>شماره همراه</label>
          <Input
            placeholder='شماره همراه شما'
            type='text'
            defaultValue={user.phone}
            className='w-full'
          />
        </div>
        <div className='my-auto w-full max-w-[904px] col-span-2' >
          <label className='text-sm font-medium'>ادرس</label>
          <Input
            placeholder='ادرس شما'
            type='text'
            defaultValue={user.address}
            className='w-full'
          />
        </div>
        <Button className='mr-auto col-span-2'>ذخیره تغییرات</Button>
      </div>
    </div>
  );
};

export default Settings;
