'use client'
import { Clock, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type RecOrderCartProps = {
  id: string;
  date: string;
  status: string;
  Estatus: string;
  total: number;
  items: {
    name: string;
    Ename: string;
    quantity: number;
  }[];
};

const RecOrderCart = ({ order }: { order: RecOrderCartProps }) => {
  const {t , i18n} = useTranslation();
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 rounded-lg border border-zinc-100 bg-white p-4'>
      <div className='sm:col-span-2 flex items-center gap-2'>
        <p className='text-sm font-medium'>
        {i18n.language == 'en' ? order.Estatus : order.status}</p>
        <span className='text-dark-500 text-xs'>#{order.id}</span>
      </div>
      <div className='not-sm:order-2'>
        <p className='text-dark-200 my-2 font-semibold'>
          {order.total.toLocaleString()}{' '}
          <span className='text-xs'>{t('global.toman')}</span>{' '}
        </p>
        <p className='text-dark-300 flex items-center gap-1 text-xs'>
          <Clock className='text-dark-300' size={16} /> {order.date}
        </p>
      </div>
      <div className='not-sm:my-3'>
        <p className='text-dark-400 text-sm '>{order.items.length} {t('account.items')}</p>
        <div className='mt-1 flex flex-wrap gap-2'>
          {order.items.map((item, index) => (
            <div
              key={index}
              className='flex flex-wrap items-center justify-between gap-1 rounded-sm border border-zinc-200 bg-gray-100 p-1 px-2'
            >
              <p className='text-sm'>
                {i18n.language == 'en' ? item.Ename : item.name}
                

              </p>
              <p className='flex items-center text-sm'>
                <XIcon size={10} />
                {item.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecOrderCart;
