import CardCarousel from "../Slider/CardCarousel";


interface ProductCardProps {
  data:any
}
  


  
  const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    console.log(data)
    return (
      <div className="card w-[100%] bg-base-100 shadow-none rounded-md ">
        <div className="">
         {data && <CardCarousel images={data.images} />}
        </div>
        <div className="flex flex-col gap-[0.85rem] py-[0.5rem]">
          <h2 className="card-title">{data.name}</h2>
          <p className='text-[15px]'>{data.description}</p>
          <div className="card-actions justify-end">
            <button className="p-[0.6rem] bg-starsBlack text-starsWhite rounded-md text-[0.75rem]">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  