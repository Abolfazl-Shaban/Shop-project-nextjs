import { userData } from '@/app/data/mockData';
import RecOrderCart from '@/components/account/RecOrderCart';

const Orders = ({}) => {
  const orders = userData.orders;
  return (
    <div>
      <h1 className='text font-bold'>سفارشات اخیر</h1>
      {orders.length === 0 ? (
        <div className='flex-center'>
          <p className='text-dark-300 text-lg font-medium'>
            هنوز سفارشی ثبت نشده است!
          </p>
        </div>
      ) : (
        <div className='mt-4 flex flex-col gap-4'> 
          {orders.map((order, index) => (
            <RecOrderCart key={index} order={order} />
          ))}
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Orders;
