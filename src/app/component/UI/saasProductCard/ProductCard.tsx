//@ts-nocheck
import CardCarousel from "../Slider/CardCarousel";
import ReactStarsRating from 'react-awesome-stars-rating';
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface ProductCardProps {
  data:any
}
  
  const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const params = useParams()
    console.log(params, "product param")
    return (
      <div className="card w-[100%] bg-base-100 shadow-md p-2 rounded-lg ">
        <div className="">
         {data ? <CardCarousel data={data}/> : "no images yet" }
        </div>
        <div className="flex flex-col gap-[0.85rem] py-[0.5rem]">          
          <div className='flex gap-3 justify-between'>
            <h2 className="card-title">{data.name}</h2>
            <ReactStarsRating value={2} className="flex self-center" count={5} isEdit={false} size={15} primaryColor="#e49a2d" secondaryColor="#000000" />                       
          </div>
          <p className='text-[15px]'>{data.description}</p>
          <div className="card-actions justify-between flex items-baseline">
            <div className="self-center text-[#e49a2d] font-[600]">${data.pricing}</div>
            <Link href={`/saas/products/${data._id}`} className="p-[0.6rem] bg-starsBlack text-starsWhite rounded-md text-[0.75rem]">Get it</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  