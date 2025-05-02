import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'صفحه مورد نظر یافت نشد',
    description: 'صفحه‌ای که به دنبال آن بودید پیدا نشد. لطفاً به صفحه اصلی بازگردید.',
    robots: {
      index: false,
      follow: false, 
    },
  };
  
const NotFound = () => {
    return ( <div className="w-full h-screen flex-c">
        <span>404 Not Found</span>
    </div> );
}
 
export default NotFound;