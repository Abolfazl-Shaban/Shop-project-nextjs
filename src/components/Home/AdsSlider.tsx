'use client';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
const AdsSlider = ({
  sliderItems,
}: {
  sliderItems:
    | {
        id: number;
        title: string;
        description: string;
        image: string;
        link: string;
      }[]
    | null;
}) => {
  return (
    <section className='container mx-auto'>
      <Swiper
        pagination={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        loop
        modules={[Pagination, Autoplay]}
        className='w-full p-2'
      >
        {sliderItems ? (
          sliderItems.map((e) => (
            <SwiperSlide className='p-2 h-full' key={e.id}>
              <Link href={e.link}>
                <Image
                  className='h-[250px] md:h-[400px] lg:h-[600px] 2xl:h-[700px] rounded-2xl object-cover'
                  width={1800}
                  height={900}
                  src={e.image}
                  alt={e.title}
                />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide className='p-2'>
              <Skeleton className='h-[250px] md:h-[400px] lg:h-[600px] 2xl:h-[700px] rounded-2xll' />
            </SwiperSlide>
            <SwiperSlide className='p-2'>
              <Skeleton className='h-[250px] md:h-[400px] lg:h-[600px] 2xl:h-[700px] rounded-2xl' />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </section>
  );
};

export default AdsSlider;
