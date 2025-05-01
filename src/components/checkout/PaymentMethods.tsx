import { HiOutlineStatusOnline } from "react-icons/hi";
import { CiCreditCard1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

const PaymentMethods = ({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
}) => {
    
  return (
    <div>
      <h2 className='p-2 font-medium not-md:text-sm'>روش های پرداخت</h2>
        <div
          onClick={() => {
            setPaymentMethod('online');
          }}
          className={`${paymentMethod == 'online' ? 'border-primary-50' : 'border-zinc-300 mb-2 hover:border-zinc-400'} flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-all`}
        >
          <div className='w-6.5'>
            <HiOutlineStatusOnline className='text-dark-400 size-full' />
          </div>
          <div className='grow'>
            <h4
              className={`${paymentMethod == 'online' ? 'text-primary-100' : 'text-dark-200'} font-medium transition-all not-md:text-sm`}
            >
              انلاین
            </h4>

            <p className='text-dark-300 mt-1 text-sm not-md:text-xs'>
              پرداخت انلاین از طریق درگاه شاپرک.
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            setPaymentMethod('cartToCart');
          }}
          className={`${paymentMethod == 'cartToCart' ? 'border-primary-50' : 'border-zinc-300 hover:border-zinc-400'} my-2 flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-all`}
        >
          <div className='w-6.5'>
            <CiCreditCard1 className='text-dark-400 size-full' />
          </div>
          <div className='grow'>
            <h4
              className={`${paymentMethod == 'cartToCart' ? 'text-primary-100' : 'text-dark-200'} font-medium transition-all not-md:text-sm`}
            >
              کارت به کارت
            </h4>

            <p className='text-dark-300 mt-1 text-sm not-md:text-xs'>
              پرداخت از طریق انتقال وجه.
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            setPaymentMethod('darMahal');
          }}
          className={`${paymentMethod == 'darMahal' ? 'border-primary-50' : 'border-zinc-300 hover:border-zinc-400'} my-2 flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-all`}
        >
          <div className='w-6.5'>
            <TbTruckDelivery className='text-dark-400 size-full' />
          </div>
          <div className='grow'>
            <h4
              className={`${paymentMethod == 'darMahal' ? 'text-primary-100' : 'text-dark-200'} font-medium transition-all not-md:text-sm`}
            >
              پرداخت در محل
            </h4>

            <p className='text-dark-300 mt-1 text-sm not-md:text-xs'>
              پرداخت وجه در محل هنگام دریافت محصول.
            </p>
          </div>
        </div>
    </div>
  );
};

export default PaymentMethods;
