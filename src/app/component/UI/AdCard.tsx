import Image from 'next/image'
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from 'next/link';

interface AdCardProps {
    title: string;
    description: string;
    price: number;
    link: string;
    image: string;
    // Add other properties as needed
  }
  

  
  const AdCard: React.FC<AdCardProps> = ({ description, title, price, link, image }) => {

    return (
        <section className="w-[100%] text-[#fff] self-center flex justify-center items-center">
        <div className="px-4 bg-black max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl self-center">
            <div className="py-5 sm:py-8 lg:py-16">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                    <div className="lg:order-2">
                        <Image width={500} height={500} className="w-full shadow-xl rounded-xl" src={``} alt="" />
                    </div>

                    <div className="lg:order-1">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug text-left">{title}</h2>
                        <p className="text-1xl leading-2 mt-3 text-left">{description}</p>
                        <p className="text-[2rem] font-[700] text-left mt-10 text-starspink">${price}</p>
                        <div className='bottom-0 right-0 py-2 text-starsBlack bg-starsWhite px-2 rounded w-[8rem] text-center mt-4 '><Link href={`saas/products/${title}`} className='flex'>Learn more <HiArrowTopRightOnSquare className='ml-1 mt-[0.5]'/></Link></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  };
  
  export default AdCard;
  