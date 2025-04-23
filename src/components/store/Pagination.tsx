import React from 'react';
import { Button } from '../ui/button';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
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
                onClick={() => onPageChange(i)}
                className={`mx-1 rounded px-3 py-1 ${
                  i === currentPage
                    ? 'bg-primary-100 text-white'
                    : ''
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
          <FaAngleRight />
          قبلی
        </Button>
        {renderPageNumbers()}
        <Button
          variant={'ghost'}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className='rounded disabled:opacity-50'
        >
          بعدی
          <FaAngleLeft />
        </Button>
      </div>
    );
};

export default Pagination;