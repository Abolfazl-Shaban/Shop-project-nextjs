'use client';
import { calculateCartTotals } from '@/app/utils/cartCalculations';
import { CartItem } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export const CheckoutSummary = ({
  cart,
  addition,
}: {
  cart: { getCartItems: () => CartItem[] };
  addition?: number;
}) => {
  const { t } = useTranslation();

  const { subtotal, discount, tax, total } = calculateCartTotals(
    cart.getCartItems(),
    addition,
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
          ` ${isTotal ? 'text-sm font-semibold' : 'text-xs'}`,
          valueClassName,
        )}
      >
        {value.toLocaleString()} {t('global.toman')}
      </p>
    </div>
  );

  return (
    <div className='flex flex-col gap-4'>
      <SummaryRow label={t('cart.subtotal')} value={subtotal} />
      {discount > 0 && (
        <SummaryRow
          label={t('global.discount')}
          value={discount}
          textClassName='text-red-500 font-medium'
          valueClassName='text-red-500 font-semibold '
        />
      )}
      <SummaryRow label={t('cart.tax')} value={tax} />
      {addition && (
        <SummaryRow
          label={t('cart.shipping')}
          value={addition}
        />
      )}
      <SummaryRow label={t('cart.total')} value={total} isTotal />
    </div>
  );
};
