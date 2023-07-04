import ContainerLayout from "@app/elements/layouts/Container";
import DescriptiveBanner from "./DescriptiveBanner";

const CommunitySection: React.FC<{
  title: string;
  description: string;
  type: string;
  imageUrl: string;
}> = ({ title, description, imageUrl, type }) => {
  return (
    <section className="section community">
      <ContainerLayout>
        <DescriptiveBanner
          imageUrl={imageUrl}
          type={type as "left" | "right"}
          title={title}
          description={description}
        />
      </ContainerLayout>
    </section>
  );
};

export default CommunitySection;
