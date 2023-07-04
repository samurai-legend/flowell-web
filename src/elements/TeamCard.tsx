import Image from "next/image";

const TeamCard: React.FC<{
  thumbnailImage: string;
  name: string;
  designation: string;
  description: string;
  brands: string[];
}> = ({ name, designation, thumbnailImage, brands, description }) => {
  return (
    <div className="team-card--container">
      <div className="team-card--thumbnail">
        <Image
          src={thumbnailImage}
          alt="team-card-image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="team-card--content">
        <div className="center-layout">
          <h4>{name}</h4>
          <span className="designation">{designation}</span>
          <span className="description">{description}</span>
        </div>
        <div className="flex flex-row justify-center items-center">
          {brands?.map((brand: string, index: number) => (
            <div
              className="team-card-brand"
              key={`team-${name}-image-${index}`}
            >
              <Image
                src={brand}
                alt="brand-image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
