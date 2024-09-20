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
        <div className="2xl:h-[11rem] xl:h-[7rem] lg:h-[7rem] md:h-[11rem] sm:h-[11rem] xsm:h-[11rem] w-full flex justify-center items-center object-contain  border border-starsBlack border-opacity-20 rounded-t-xl">
        <Image
          width={400}
          height={500}
          src={`${logo}`}
          alt={`${name}`}
          className=" object-contain h-[80%] self-center rounded-2xl overflow-hidden"
        />
        </div>

        <div className="py-[1rem]">
          <h2 className="card-title 2xl:text-[1.1rem] xl:text-[0.85rem] lg:text-[0.85rem] md:text-[1.1rem] sm:text-[1.1rem] xsm:text-[1.1rem] font-[700] text-[#121212]">{name}</h2>
          <p className="pt-[0.5rem] pb-[0.6rem] text-starsBlack 2xl:text-[0.837rem] xl:text-[0.75rem] lg:text-[0.65rem] md:text-[0.837rem] sm:text-[0.837rem] xsm:text-[0.837rem] ">{description}</p>
          <div className="card-actions justify-between items-center">
          <span className="text-[#e49a2d] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] md:text-[16px] sm:text-[16px] xsm:text-[16px] font-[700]">{productType}</span>
            <Link href={url || '#'} className=" hover:bg-starsGrey 2xl:py-[0.8rem] xl:py-[0.55rem] lg:py-[0.55rem] md:py-[0.8rem] sm:py-[0.8rem] xsm:py-[0.8rem] px-[0.8rem] bg-[#121212] text-starsWhite rounded-md border-none 2xl:text-[12px] xl:text-[10px] lg:text-[10px] md:text-[12px] sm:text-[12px] xsm:text-[12px]  ">Get it</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCardII;
  