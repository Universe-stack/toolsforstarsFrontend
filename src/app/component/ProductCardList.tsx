// components/ProductCardList.tsx
//@ts-nocheck
'use client'

import ProductCard from '@/app/component/UI/saasProductCard/ProductCard';

export default function ProductCardList({ tools }) {
  return (
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 gap-5 mt-[5rem] w-[100%] justify-center items-center relative'>
      {tools?.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}