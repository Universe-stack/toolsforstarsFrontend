interface ProductCardProps {
    name: string;
    description: string;
    // Add other properties as needed
  }
  

  
  const ProductCard: React.FC<ProductCardProps> = ({ name, description }) => {
  
    return (
      <div className="card w-[22rem] bg-base-100 shadow-xl">
        <figure><img src="https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  