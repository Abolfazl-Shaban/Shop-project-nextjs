import Image from 'next/image';
import { CartItem } from '@/context/CartContext';
import { CalDiscount } from '@/app/utils/calDiscount';

const OrderCart = ({ cartItem }: { cartItem: CartItem }) => {
  return (
    <div>
      <div className='flex h-[230px] w-[180px] flex-col items-center rounded-lg border p-3'>
        <Image
          src={cartItem.product.image}
          alt={cartItem.product.name}
          width={512}
          height={512}
          className='h-[70%] w-fit rounded-lg'
        />
        <div className='mt-1 flex flex-col items-center gap-1'>
          <h3 className='font-semibold'>{cartItem.product.name}</h3>
          <div className='flex items-center gap-2'>
            <p className='text-dark-300 flex-center size-6 rounded-sm border p-1.5 text-sm'>
              {cartItem.quantity}
            </p>
            <p className='text-dark-200 text-xs'>
              {' '}
              <span className='text-sm font-semibold'>
                {(
                  CalDiscount(
                    cartItem.product.price,
                    cartItem.product.discount,
                  ) * cartItem.quantity
                ).toLocaleString()}
              </span>{' '}
              تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
