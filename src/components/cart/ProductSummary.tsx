import { calculateCartTotals } from '@/app/utils/cartCalculations';
import { CartItem } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export const CartSummary = ({
  cart,
}: {
  cart: { getCartItems: () => CartItem[] };
}) => {
  const { subtotal, discount, tax, total } = calculateCartTotals(
    cart.getCartItems(),
  );

  const SummaryRow = ({
    label,
    value,
    textClassName,
    valueClassName,
    isTotal = false,
  }: {
    label: string;
    value: number;
    textClassName?: string;
    valueClassName?: string;
    isTotal?: boolean;
  }) => (
    <div
      className={`flex items-center justify-between ${isTotal ? 'mt-2' : ''}`}
    >
      <p
        className={cn(
          `text-dark-100 ${isTotal ? 'text-base font-semibold' : 'text-sm'}`,
          textClassName,
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          `font-[vazir] ${isTotal ? 'text-sm font-semibold' : 'text-xs'}`,
          valueClassName,
        )}
      >
        {value.toLocaleString()} تومان
      </p>
    </div>
  );

  return (
    <div className='flex flex-col gap-4'>
      <SummaryRow label='قیمت محصولات' value={subtotal} />
      {discount > 0 && (
        <SummaryRow
          label='تخفیف'
          value={discount}
          textClassName='text-red-500 font-medium'
          valueClassName='text-red-500 font-semibold font-[vazir]'
        />
      )}
      <SummaryRow label='مالیات %10' value={tax} textClassName='font-[vazir]' />
      <SummaryRow label='جمع کل' value={total} isTotal />
    </div>
  );
};
