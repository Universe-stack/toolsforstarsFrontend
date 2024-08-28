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
      <div className="card 2xl:w-[85%] xl:w-[85%] md:w-[85%] lg:w-[85%] sm:w-[100%] xsm:w-[100%] shadow-none rounded-xl h-[21rem]">
        <div className="h-[11rem] w-full flex justify-center items-center object-contain  border border-starsBlack border-opacity-20 rounded-t-xl">
        <Image
          width={400}
          height={500}
          src={`${logo}`}
          alt={`${name}`}
          className=" object-contain h-[80%] self-center rounded-2xl overflow-hidden"
        />
        </div>

        <div className="py-[1rem]">
          <h2 className="card-title text-[1.1rem] font-[700] text-[#121212]">{name}</h2>
          <p className="pt-[0.5rem] pb-[0.6rem] text-starsBlack text-[0.837rem] ">{description}</p>
          <div className="card-actions justify-between items-center">
          <span className="text-[#e49a2d] text-[16px] font-[700]">{productType}</span>
            <Link href={url || '#'} className=" hover:bg-starsGrey py-[0.8rem] px-[0.8rem] bg-[#121212] text-starsWhite rounded-md border-none text-[12px] ">Get it</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCardII;
  