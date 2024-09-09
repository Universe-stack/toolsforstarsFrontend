//@ts-nocheck
'use client'
import CardCarousel from "../Slider/CardCarousel";
import ReactStarsRating from 'react-awesome-stars-rating';
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface ProductCardProps {
  data:any
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}
  
  const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const params = useParams()
    console.log(params, "product param")
    return (
      <div className="card w-[100%] bg-starsWhite shadow-md p-2 rounded-lg ">
        <div className="">
         {data ? <CardCarousel data={data}/> : "no images yet" }
        </div>
        <div className="flex flex-col gap-[0.85rem] py-[0.5rem]">          
          <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-start xsm:justify-start gap-3 justify-between'>
            <h2 className="card-title">{data.name}</h2>
            <ReactStarsRating value={data.averageReview} className="flex 2xl:self-center xl:self-center lg:self-center  md:self-center sm:self-start xsm:self-start" count={5} isEdit={false} size={15} primaryColor="#e49a2d" secondaryColor="#000000" />                       
          </div>
          <p className='text-[14px] text-[#121212]'>{truncateText(data.description,70)}</p>
          <div className="card-actions justify-between flex items-baseline">
            <div className="self-center text-[#e49a2d] font-[600]">${data.pricing}</div>
            <Link href={`/saas/products/${data._id}`} className="p-[0.6rem] bg-starsBlack text-starsWhite rounded-md text-[0.75rem]">Get it</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  