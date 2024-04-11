import CardCarousel from "../Slider/CardCarousel";


interface ProductCardProps {
  data:any
}
  


  
  const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    console.log(data)
    return (
      <div className="card w-[22rem] bg-base-100 shadow-xl">
        <div className="">
         {data && <CardCarousel images={data.images} />}
        </div>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  