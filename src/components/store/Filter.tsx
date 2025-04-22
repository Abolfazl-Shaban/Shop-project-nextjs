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
import { useEffect, useMemo, useState } from 'react';
import { Product } from '../Product/Product.type';
import { getPriceRange } from '@/app/utils/getRangePrice';
import { Category } from '../Product/Category.type';
import { Brand } from '../Product/Brand.type';
import { Checkbox } from '../ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import { LuSettings2 } from 'react-icons/lu';
import { XIcon } from 'lucide-react';
import Order from './Order';

const Filter = ({
  products,
  categories,
  brands,
  updateParams,
}: {
  products: Product[];
  categories: Category[] | undefined;
  brands: Brand[] | undefined;
  updateParams: (key: string, value: string | number | undefined) => void;
}) => {
  const searchParams = useSearchParams();

  const order = searchParams.get('order');

  const priceToStr = searchParams.get('price_to');
  const priceّFromStr = searchParams.get('price_from');
  const brandsParams = searchParams.get('brands')?.split('_') || [];

  const [selectedBrands, setSelectedBrands] = useState<string[]>(brandsParams);
  const defaultRange = useMemo(() => getPriceRange(products), [products]);

  const [priceRange, setPriceRange] = useState([
    priceّFromStr ? Number(priceّFromStr) : defaultRange[0],
    priceToStr ? Number(priceToStr) : defaultRange[1],
  ]);
  const [category, setCategory] = useState<string>(
    searchParams.get('category') || '',
  );

  const router = useRouter();

  useEffect(() => {
    const [min, max] = getPriceRange(products);
    setPriceRange([min, max]);
  }, [products]);

  return (
    <>
      <div className='relative flex items-center justify-between border-b p-4 h-[70px] text-sm font-medium'>
        <p className='flex items-center gap-1'>
          <LuSettings2 size={22} /> فیلترها
        </p>
        <Button
          onClick={() => {
            setCategory('');
            setSelectedBrands([]);
            setPriceRange(defaultRange);

            router.push('/products');
          }}
          variant={'outline'}
          hidden={category == '' && selectedBrands.length == 0 && priceRange[0] == defaultRange[0] && priceRange[1] == defaultRange[1] && !order }
          className='cursor-pointer rounded-full border-zinc-100 bg-zinc-50 text-xs'
        >
          <XIcon />
          حذف همه
        </Button>
      </div>
      <div className='p-4'>
        <p className='mb-2 text-sm font-medium'>دسته بندی</p>
        <div className='relative'>
          <Select
            dir='rtl'
            onValueChange={(val) => {
              setCategory(val);
              updateParams('category', val);
            }}
            value={category}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='انتخاب دسته بندی' />
            </SelectTrigger>
            <SelectContent className='w-full'>
              <SelectGroup>
                <SelectLabel>دسته بندی ها</SelectLabel>
                {categories &&
                  categories.map((e) => (
                    <SelectItem className='' value={e.id} id={e.id} key={e.id}>
                      {e.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {category && (
            <Button
              variant={'ghost'}
              className='text-dark-300 absolute top-0 left-8 cursor-pointer p-3 text-xl font-light hover:bg-zinc-200/50'
              onClick={() => {
                setCategory('');

                updateParams('category', undefined);
              }}
            >
              ×
            </Button>
          )}
        </div>

        <hr className='mx-auto my-4 w-5/6' />

        <p className='mb-2 text-sm font-medium'>محدوده قیمت</p>
        <Slider
          className='text-red-400'
          min={defaultRange[0]}
          max={defaultRange[1]}
          value={priceRange}
          step={10000}
          dir='rtl'
          onValueChange={(newValue) => {
            setPriceRange(newValue); 
          }}
          onValueCommit={(rangeVal) => {
            setPriceRange(rangeVal);

            updateParams(
              'price_from',
              rangeVal[0] == defaultRange[0] ? undefined : priceRange[0],
            );
            updateParams(
              'price_to',
              rangeVal[1] == defaultRange[1] ? undefined : priceRange[1],
            );
          }}
        />
        <p className='mt-2 text-center font-[vazir] text-sm'>
          {priceRange[0].toLocaleString()} تومان تا{' '}
          {priceRange[1].toLocaleString()} تومان
        </p>

        <hr className='mx-auto my-4 w-5/6' />

        <p className='mt-4 mb-2 text-sm font-medium'>برند</p>
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
                  );
                }}
                className='text-primary-200'
              />
              <span>{e.name}</span>
            </div>
          ))}
          
          <hr className='mx-auto my-4 w-5/6 md:hidden' />

        <Order className='flex-wrap md:hidden' updateParams={updateParams} />
      </div>
    </>
  );
};

export default Filter;
