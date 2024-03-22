interface ProductCardProps {
    name: string;
    description: string;
    // Add other properties as needed
  }
  

  
  const ProductCardII: React.FC<ProductCardProps> = ({ name, description }) => {
  
    return (
      <div className="card w-[90%] bg-base-100 shadow-none">
        <figure><img src="https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp" alt="Shoes" /></figure>
        <div className="py-[1rem]">
          <h2 className="card-title text-[1.1rem] font-[700] text-[#121212]">{name}</h2>
          <p className="pt-[0.5rem] pb-[0.6rem] text-[#717171] text-[0.937rem] ">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary py-[0.5rem] px-[0.7rem] bg-[#121212] text-starsWhite rounded-md border-none">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCardII;
  