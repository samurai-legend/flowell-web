import CircleMask from "@app/elements/CircleMask";
import TwoGridColLayout from "@app/elements/layouts/TwoGridCol";

const DescriptiveBanner: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  type: "left" | "right";
}> = ({ title, description, imageUrl, type }) => {
  return (
    <TwoGridColLayout>
      <div
        className={`flex flex-col justify-center items-start gap-y-5 z-10 ${
          type === "left" ? "order-1 pl-10" : "-order-1 pl-0"
        }`}
      >
        <h1 className="text-h3 max-w-xs">{title}</h1>
        <p className="text-body max-w-sm">{description}</p>
      </div>
      <CircleMask imageUrl={imageUrl} alt="banner-image" rings={1} />
    </TwoGridColLayout>
  );
};

export default DescriptiveBanner;
