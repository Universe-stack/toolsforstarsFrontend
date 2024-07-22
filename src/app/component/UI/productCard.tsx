interface ProductCardProps {
    name: string;
    description: string;
    // Add other properties as needed
  }
  

  
  const ProductCard: React.FC<ProductCardProps> = ({ name, description, productType }) => {
  
    return (
      <div className="card w-[22rem] bg-base-100 shadow-xl">
        <figure><img src="https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions ">
            <button className="btn btn-primary bg-[#121212] border-[#121212] hover:bg-starsGrey hover:border-starsGrey justify-end">Learn More</button>
            <span className="self-center justify-start text-starsPink">{productType}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  