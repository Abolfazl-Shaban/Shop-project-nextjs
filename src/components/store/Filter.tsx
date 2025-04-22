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
import { useDebounce } from '@/app/utils/useDebounce';

const Filter = ({
  products,
  categories,
  brands,
}: {
  products: Product[];
  categories: Category[] | undefined;
  brands: Brand[] | undefined;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const priceToStr = searchParams.get('price_to');
  const priceّFromStr = searchParams.get('price_from');
  const brandsParams = searchParams.get('brands')?.split('_') || [];

  const [sliderChanged, setSliderChanged] = useState(false);
  const defaultRange = useMemo(() => getPriceRange(products), [products]);
  
  const [priceRange, setPriceRange] = useState([
    priceّFromStr ? Number(priceّFromStr) : defaultRange[0],
    priceToStr ? Number(priceToStr) : defaultRange[1],
  ]);
  const [category, setCategory] = useState<string>(
    searchParams.get('category') || '',
  );

  const debouncedPrice = useDebounce(priceRange, 100);

  useEffect(() => {
    if (sliderChanged) {
      updateParams(
        'price_from',
        priceRange[0] == defaultRange[0] ? undefined : priceRange[0],
      );
      updateParams(
        'price_to',
        priceRange[1] == defaultRange[1] ? undefined : priceRange[1],
      );
    }
  }, [debouncedPrice,sliderChanged]);

  useEffect(() => {
    const [min, max] = getPriceRange(products);
    setPriceRange([min, max]);
  }, [products]);

  const params = new URLSearchParams(searchParams.toString());
  const updateParams = (key: string, value: string | number | undefined) => {
    if (value) {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
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
        defaultValue={priceRange}
        onValueChange={(rangeVal) => {
          setSliderChanged(true);
          setPriceRange(rangeVal);
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
              defaultChecked={brandsParams.includes(e.id.toString())}
              onCheckedChange={() => {
                const current = searchParams.get('brands')?.split('_') || [];
                const newBrands = current.includes(e.id.toString())
                  ? current.filter((r) => r != e.id.toString())
                  : [...current, e.id.toString()];

                updateParams('brands', newBrands.join('_'));
              }}
              className='text-primary-200'
            />
            <span>{e.name}</span>
          </div>
        ))}
    </div>
  );
};

export default Filter;
