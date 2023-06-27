import Image from "next/image";

const Logo: React.FC<{ type: "dark" | "light"; url: string }> = ({
  type,
  url = "/",
}) => {
  return (
    <div className="logo">
      <a href={url}>
        <Image
          src={`${
            type === "dark"
              ? "/assets/logo-white.png"
              : "/assets/logo-black.png"
          }`}
          fill={true}
          alt="Logo"
          style={{ objectFit: "contain" }}
          quality={100}
        />
      </a>
    </div>
  );
};

export default Logo;
