import Image from "next/image";

const BrandImage: React.FC<{ url: string; alt: string }> = ({ url, alt }) => {
  return (
    <div className="brand-image">
      <Image src={url} alt={alt} fill style={{ objectFit: "contain" }} />
    </div>
  );
};

export default BrandImage;
