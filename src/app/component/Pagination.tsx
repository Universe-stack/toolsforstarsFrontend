// components/Pagination.tsx
//@ts-nocheck
import Link from 'next/link';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export default function Pagination({ currentPage, totalPages, category }) {
  return (
    <div className='w-full flex justify-end mt-8'>
      <div className="flex gap-2 items-center">
        <Link href={`/saas/${category}?page=${currentPage - 1}`} className={`join-item btn btn-outline flex gap-2 items-center ${currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}`}>
          Previous <FaAnglesLeft className='pb-[0.4rem] text-[1.5rem]' />
        </Link>
        <span className='self-center text-starspurpleLight'>{`${currentPage} / ${totalPages}`}</span>
        <Link href={`/saas/${category}?page=${currentPage + 1}`} className={`join-item btn btn-outline flex gap-2 items-center ${currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}`}>
          Next <FaAnglesRight className='pb-[0.4rem] text-[1.5rem]' />
        </Link>
      </div>
    </div>
  );
}