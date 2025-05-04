'use client';

import { userData } from '@/app/data/mockData';
import RecOrderCart from '@/components/account/RecOrderCart';
import { useTranslation } from 'react-i18next';

const Orders = () => {
  const orders = userData.orders;
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='text font-bold'>{t('account.ordersTitle')}</h1>
      {orders.length === 0 ? (
        <div className='flex-center'>
          <p className='text-dark-300 text-lg font-medium'>
            {t('account.noOrders')}
          </p>
        </div>
      ) : (
        <div className='mt-4 flex flex-col gap-4'>
          {orders.map((order, index) => (
            <RecOrderCart key={index} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
