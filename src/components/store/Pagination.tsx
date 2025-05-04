'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { updateParams } from '@/app/utils/updateParams';
import { useTranslation } from 'react-i18next';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const params = new URLSearchParams(useSearchParams().toString());
  const handlePrevious = () => {
    if (currentPage > 1) {
      updateParams('page', currentPage - 1, params, router);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      updateParams('page', currentPage + 1, params, router);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          variant={'ghost'}
          size={'icon'}
          key={i}
          onClick={() => updateParams('page', i, params, router)}
          className={`mx-1 rounded px-3 py-1 ${
            i === currentPage ? 'bg-primary-100 text-white' : ''
          }`}
        >
          {i}
        </Button>,
      );
    }
    return pages;
  };

  return (
    <div className='mt-4 flex items-center justify-center space-x-2'>
      <Button
        variant={'ghost'}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className='rounded disabled:opacity-50'
      >
        {i18n.language == 'en' ? <FaAngleLeft /> : <FaAngleRight />}
        {t('shop.page.previous')}
      </Button>
      {renderPageNumbers()}
      <Button
        variant={'ghost'}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='rounded disabled:opacity-50'
      >
        {t('shop.page.next')}
        {i18n.language == 'en' ? <FaAngleRight /> : <FaAngleLeft />}
      </Button>
    </div>
  );
};

export default Pagination;
