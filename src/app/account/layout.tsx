import AccountSidebar from '@/components/account/AccountSidebar';
import Header from '@/components/global/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className='max-w-[1600px] mx-auto flex not-md:flex-col-reverse px-5 gap-5'>
        <div className=' md:rounded-lg border-t not-md:border-zinc-400 md:border h-fit w-full md:w-[250px] lg:w-[300px]'>
          <AccountSidebar />  
        </div>
        <div className='rounded-lg p-2 md:p-6 md:border grow '>
        {children}
        </div>
      </div>
    </>
  );
}
