import { Button } from '@/components/ui/button';

const LogOut = () => {
  return (
    <div className='flex-center h-full w-full gap-2'>
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text font-bold'>خروج از حساب کاربری</h1>
        <p className='text-sm text-zinc-500'>
          آیا مطمئن هستید که می خواهید از حساب کاربری خود خارج شوید؟
        </p>
        <div className='grid grid-cols-2 gap-2 mt-2'>
          <Button variant={'ghost'}>خیر</Button>
          <Button>بله</Button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
