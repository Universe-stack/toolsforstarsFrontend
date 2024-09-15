'use client'
import Link from "next/link";
import Image from 'next/image'

interface ProductCardProps {
    name: string;
    description: string;
    price:string;
    productLink:string;
    image:string;
    // Add other properties as needed
  }
  

  
  const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, productLink,image }) => {
  
    return (
      <div className="card 2xl:w-[22rem] xl:w-[22rem] lg:w-[15rem] md:w-[22rem] sm:w-[100%] xsm:w-[100%]  shadow-xl self-center border  border-[#f0f0f0] bg-starsWhite text-starsBlack">
        <figure><Image src={image}  width={500} height={100} alt={name} className="object-cover h-[40%]" /></figure>
        <div className="2xl:card-body xl:card-body lg:py-4 px-4">
          <div className="flex items-center justify-between">
            <h2 className="2xl:card-title xl:card-title 2xl:text-[1.5rem] xl:text-[1.5rem] lg:font-[600] lg:text-[1rem]">{name}</h2>
            <h2 className="2xl:card-title xl:card-title 2xl:text-[1.5rem] xl:text-[1.5rem] lg:font-[600] lg:text-[1.25rem]">${price}</h2>
          </div>
          <p className="my-[8px] 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.75rem]">{description}</p>
          <div className="lg:mb-2 lg:mt-3 ">
            <a href={`${productLink}`} className="2xl:btn xl:btn 2xl:bg-starsBlack xl:bg-starsBlack 2xl:text-[0.85rem] xl:text-[0.85rem] lg:text-[0.7rem] lg:py-2 lg:px-2 rounded-md bg-[#121212] border-[#121212] hover:bg-starsWhite hover:border-starsBlack hover:text-starsBlack justify-end text-starsWhite ">Learn More</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  