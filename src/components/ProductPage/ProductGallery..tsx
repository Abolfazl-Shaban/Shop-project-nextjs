'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductGallery = ({ images }: { images: string[] }) => {
  const [galleryImage, setGalleryImage] = useState(images[0]);
  return (
    <div className='flex not-lg:flex-col-reverse mb-10'>
      <div className='flex lg:flex-col justify-center flex-wrap gap-2'>
        {images.map((e, i) => (
          <div
            onClick={() => setGalleryImage(e)}
            className='relative size-16 overflow-hidden rounded-md border'
            key={i}
          >
            <Image
              alt={e}
              src={e}
              width={512}
              height={512}
              className={`h-full w-full`}
            />
            <div
              className={`${e == galleryImage ? 'bg-primary-100/40' : 'hover:bg-primary-100/20'} absolute top-0 h-full w-full transition-all`}
            ></div>
          </div>
        ))}
      </div>
      <div className='flex items-center p-1'>
        <Image
          className='`'
          width={1024}
          height={1024}
          src={galleryImage}
          alt={'product image'}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
