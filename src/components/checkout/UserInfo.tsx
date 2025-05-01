import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const UserInfo = () => {
  return (
    <div>
      <h2 className='p-2  font-medium not-md:text-sm'>اطلاعات شما</h2>
      <div className='text-dark-300 grid grid-cols-2 gap-6 rounded-xl border p-4 mb-2'>
        <div className='t'>
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
    </div>
  );
};

export default UserInfo;
