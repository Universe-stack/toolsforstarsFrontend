import Link from 'next/link';
import Image from 'next/image'
interface ProductCardProps {
    name: string;
    description: string;
    logo:string;
    productType:string;
    url: any
    // Add other properties as needed
  }
  

  
  const ProductCardII: React.FC<ProductCardProps> = ({ name, description, logo, productType,url }) => {
  
    console.log(logo,'screenshots')
    return (
      <div className="card w-[90%] bg-base-100 shadow-none">
        <figure className="object-cover"><Image width={300} height={350} src={`${logo}`} alt={`${name} image`} className="object-cover h-[10rem] w-[100%]"/></figure>
        <div className="py-[1rem]">
          <h2 className="card-title text-[1.1rem] font-[700] text-[#121212]">{name}</h2>
          <p className="pt-[0.5rem] pb-[0.6rem] text-[#717171] text-[0.937rem] ">{description}</p>
          <div className="card-actions justify-between items-center">
          <span className="text-[#e49a2d] text-[16px] font-[700]">{productType}</span>
            <Link href={url || '#'} className=" hover:bg-starsGrey py-[0.8rem] px-[0.8rem] bg-[#121212] text-starsWhite rounded-md border-none text-[12px] ">Get it</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCardII;
  