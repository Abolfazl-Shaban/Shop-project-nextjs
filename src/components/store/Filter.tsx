'use client';

import { Slider } from '../ui/slider';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Category } from '../Product/Category.type';
import { Brand } from '../Product/Brand.type';
import { Checkbox } from '../ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import { LuSettings2 } from 'react-icons/lu';
import { XIcon } from 'lucide-react';
import Order from './Order';
import { updateParams } from '@/app/utils/updateParams';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const Filter = ({
  priceRnage,
  categories,
  brands,
  className,
}: {
  priceRnage: number[] | undefined;
  categories: Category[] | undefined;
  brands: Brand[] | undefined;
  className?: string;
}) => {
  const searchParams = useSearchParams();

  const order = searchParams.get('order');
  const priceToStr = searchParams.get('price_to');
  const priceFromStr = searchParams.get('price_from');
  const brandsParams = searchParams.get('brands')?.split('_') || [];

  const [selectedBrands, setSelectedBrands] = useState<string[]>(brandsParams);
  const defaultRange = priceRnage!;

  const { t, i18n } = useTranslation();

  const router = useRouter();

  const [priceRange, setPriceRange] = useState([
    priceFromStr ? Number(priceFromStr) : defaultRange[0],
    priceToStr ? Number(priceToStr) : defaultRange[1],
  ]);

  const [category, setCategory] = useState<string>(
    searchParams.get('category') || '',
  );
  const params = new URLSearchParams(searchParams.toString());

  return (
    <div className={cn(className)}>
      <div className='relative flex h-fit items-center justify-between border-b p-4 text-sm font-medium'>
        <p className='flex items-center gap-1'>
          <LuSettings2 size={22} /> {t('shop.filter')}
        </p>
        <Button
          onClick={() => {
            setCategory('');
            setSelectedBrands([]);
            setPriceRange(defaultRange);

            router.push('/products');
          }}
          variant={'outline'}
          hidden={
            category == '' &&
            selectedBrands.length == 0 &&
            priceRange[0] == defaultRange[0] &&
            priceRange[1] == defaultRange[1] &&
            !order
          }
          className='flex cursor-pointer items-center gap-2 rounded-full border-zinc-100 bg-zinc-50 text-xs'
        >
          <XIcon />
          <p className='mt-0.5'>{t('shop.remove-all')}</p>
        </Button>
      </div>
      <div className='p-4'>
        <p className='mb-2 text-sm font-medium'>{t('shop.category')}</p>
        <div className='relative'>
          <Select
            dir={i18n.language == 'en' ? 'ltr' : 'rtl'}
            onValueChange={(val) => {
              setCategory(val);
              updateParams('category', val, params, router);
            }}
            value={category}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder={t('shop.select-category')} />
            </SelectTrigger>
            <SelectContent className='w-full'>
              <SelectGroup>
                <SelectLabel>{t('shop.categories-title')}</SelectLabel>
                {categories &&
                  categories.map((e) => (
                    <SelectItem className='' value={e.id} id={e.id} key={e.id}>
                      {i18n.language == 'en' ? e.Ename : e.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {category && (
            <Button
              variant={'ghost'}
              className='text-dark-300 absolute end-8 top-0 cursor-pointer p-3 text-xl font-light hover:bg-zinc-200/50'
              onClick={() => {
                setCategory('');

                updateParams('category', undefined, params, router);
              }}
            >
              ×
            </Button>
          )}
        </div>

        <hr className='mx-auto my-4 w-5/6' />

        <p className='mb-2 text-sm font-medium'>{t('shop.price-range')}</p>
        <Slider
          className='text-red-400'
          min={defaultRange[0]}
          max={defaultRange[1]}
          value={priceRange}
          step={10000}
          dir={i18n.language == 'en' ? 'ltr' : 'rtl'}
          onValueChange={(newValue) => {
            setPriceRange(newValue);
          }}
          onValueCommit={(rangeVal) => {
            setPriceRange(rangeVal);

            updateParams(
              'price_from',
              rangeVal[0] == defaultRange[0] ? undefined : priceRange[0],
              params,
              router,
            );
            updateParams(
              'price_to',
              rangeVal[1] == defaultRange[1] ? undefined : priceRange[1],
              params,
              router,
            );
          }}
        />
        <p className='mt-2 text-center text-sm'>
          {priceRange[0].toLocaleString()} {t('shop.filter-price-from')}{' '}
          {priceRange[1].toLocaleString()} {t('shop.filter-price-to')}
        </p>

        <hr className='mx-auto my-4 w-5/6' />

        <p className='mt-4 mb-2 text-sm font-medium'>{t('shop.brand')}</p>
        {brands &&
          brands.map((e) => (
            <div className='my-1 flex items-center gap-1' key={e.id}>
              <Checkbox
                checked={selectedBrands.includes(e.id.toString())}
                onCheckedChange={() => {
                  const newBrands = selectedBrands.includes(e.id.toString())
                    ? selectedBrands.filter((r) => r !== e.id.toString())
                    : [...selectedBrands, e.id.toString()];

                  setSelectedBrands(newBrands);
                  updateParams(
                    'brands',
                    newBrands.length ? newBrands.join('_') : undefined,
                    params,
                    router,
                  );
                }}
                className='text-primary-200'
              />
              <span>{i18n.language == 'en' ? e.Ename : e.name}</span>
            </div>
          ))}

        <hr className='mx-auto my-4 w-5/6 md:hidden' />

        <Order className='flex-wrap md:hidden' />
      </div>
    </div>
  );
};

export default Filter;
