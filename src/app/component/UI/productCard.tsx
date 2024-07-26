'use client'
import Link from "next/link";

interface ProductCardProps {
    name: string;
    description: string;
    price:string;
    productLink:string
    // Add other properties as needed
  }
  

  
  const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, productLink }) => {
  
    return (
      <div className="card w-[22rem] bg-base-100 shadow-xl">
        <figure><img src="https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-[1.5rem]">{name}</h2>
            <h2 className="card-title text-starsBlack text-[1.5rem] font-[700]">${price}</h2>
          </div>
          <p className="my-[8px]">{description}</p>
          <div className="card-actions ">
            <a href={`${productLink}`} className="btn btn-primary bg-[#121212] border-[#121212] hover:bg-starsGrey hover:border-starsGrey justify-end text-starsWhite">Learn More</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  