import AccountSidebar from '@/components/account/AccountSidebar';
import Header from '@/components/global/Header';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: 'حساب کاربری من',
  description: 'مدیریت اطلاعات کاربری، سفارشات، و آدرس‌های ذخیره‌شده.',
  robots: {
    index: false,
    follow: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <>
    
      <Header />
      <div className='max-w-[1600px] mx-auto flex not-md:flex-col-reverse md:px-5 gap-5'>
        <div className=' md:rounded-lg border-t-2 not-md:border-gray-400/50 md:border h-fit w-full md:w-[250px] lg:w-[300px]'>
          <AccountSidebar />  
        </div>
        <div className='rounded-lg p-4 md:p-6 md:border grow '>
        {children}
        </div>
      </div>
    </>
  );
}
