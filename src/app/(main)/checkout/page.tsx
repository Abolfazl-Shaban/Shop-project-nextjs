'use client';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  return (
    <div className='container mx-auto my-6 flex gap-6'>
      <div className='grow'>
        <h2 className='p-2 text-sm font-medium'>اطلاعات شما</h2>
        <div className='text-dark-300 grid grid-cols-2 gap-6 rounded-xl border p-4'>
          <div className=' '>
            <label className='p-1 px-3 text-sm' htmlFor='name'>
              نام و نام خانوادگی
            </label>
            <Input
              className='py-5'
              id='name'
              placeholder='نام خود را وارد کنید'
            />
          </div>
          <div className=''>
            <label className='p-1 px-3 text-sm' htmlFor='phone'>
              شماره همراه
            </label>
            <Input
              className='py-5'
              id='phone'
              placeholder='شماره همراه خود را وارد کنید'
            />
          </div>
          <div className=' '>
            <label className='p-1 px-3 text-sm' htmlFor='ostan'>
              استان
            </label>
            <Select dir='rtl'>
              <SelectTrigger id='ostan' className='w-full py-5'>
                <SelectValue placeholder='استان خود را انتخاب کنید' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='khorasanrazavi'>خراسان رضوی</SelectItem>
                <SelectItem value='tehran'>تهران</SelectItem>
                <SelectItem value='esfahan'>اصفهان</SelectItem>
                <SelectItem value='ghom'>قوم</SelectItem>
                <SelectItem value='ardbil'>اردبیل</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=' '>
            <label className='p-1 px-3 text-sm' htmlFor='city'>
              شهر
            </label>
            <Select dir='rtl'>
              <SelectTrigger id='city' className='w-full py-5'>
                <SelectValue placeholder='شهر خود را انتخاب کنید' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='mashhad'>مشهد</SelectItem>
                <SelectItem value='torbat'>تربت حیدریه</SelectItem>
                <SelectItem value='nishabor'>نیشابور</SelectItem>
                <SelectItem value='kashmar'>کاشمر</SelectItem>
                <SelectItem value='tehran'>تهران</SelectItem>
                <SelectItem value='esfahan'>اصفهان</SelectItem>
                <SelectItem value='karaj'>کرج</SelectItem>
                <SelectItem value='ardbil'>اردبیل</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='col-span-2'>
            <label className='p-1 px-3 text-sm' htmlFor='locaddress'>
              آدرس
            </label>
            <Input
              className='py-5'
              id='locaddress'
              placeholder='ادرس  سکونت خود را وارد کنید'
            />
          </div>
          <div className=' '>
            <label className='p-1 px-3 text-sm' htmlFor='postalcode'>
              کد پستی
            </label>
            <Input
              className='py-5'
              id='postalcode'
              placeholder='کد پستی خود را وارد کنید'
            />
          </div>
          <div className=' '>
            <label className='p-1 px-3 text-sm' htmlFor='plate'>
              پلاک
            </label>
            <Input
              className='py-5'
              id='plate'
              placeholder='پلاک خود را وارد کنید'
            />
          </div>
        </div>
        <h2 className='p-2 text-sm font-medium'>روش های پرداخت</h2>
        <div>
          <div className='border-primary-50/50 rounded-lg border bg-zinc-100 p-3'>
            <div className='flex items-center gap-2'>
              <p
                className={`flex-center size-5 rounded-full border ${paymentMethod == 'online' ? 'border-primary-100' : 'border-zinc-700'} `}
              >
                <p
                  className={`size-3 rounded-full ${paymentMethod == 'online' && 'bg-primary-100'}`}
                ></p>
              </p>
              <h4 className='text-dark-200 text-sm font-medium'>انلاین</h4>
            </div>
            <p className='text-dark-300 text-sm'>
              پرداخت انلایت از طریق درگاه شاپرک.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className='sticky top-0 w-1/4 rounded-xl border p-4'></div>
    </div>
  );
};

export default CheckoutPage;
