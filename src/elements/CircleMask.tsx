import Image from "next/image";

const CircleMask: React.FC<{
  imageUrl: string;
  alt: string;
  rings: number;
}> = ({ imageUrl, alt, rings }) => {
  return (
    <div className="circlemask--container">
      <div className="content">
        <Image src={imageUrl} fill style={{ objectFit: "cover" }} alt={alt} />
        <div className="outer-ring--container">
          {Array.from(Array(rings), (e, i) => {
            return <div key={`ring-${i}`} className="ring-item"></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CircleMask;
