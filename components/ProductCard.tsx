import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} className="learn-more">
        Learn More →
      </Link>
    </div>
  );
};

export default ProductCard;
