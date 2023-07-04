import Button from "@app/elements/button/Button";
import ContainerLayout from "@app/elements/layouts/Container";
import DescriptiveBanner from "./DescriptiveBanner";

interface BannerDetails {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
}
const WhatIsFlowellSection: React.FC<{
  title: string;
  description: string;
  cta: { link: string; label: string };
  bannerDetails: BannerDetails;
}> = ({ title, description, cta, bannerDetails }) => {
  return (
    <section className="section what-is-flowell">
      <ContainerLayout>
        <div className="center-layout gap-y-5">
          <h2 className="text-h2">{title}</h2>
          <p className="text-body max-w-lg text-center">{description}</p>
          <Button as="a" href={cta.link} target="_blank">
            {cta.label}
          </Button>
        </div>
        <div className="spacer"></div>
        <DescriptiveBanner
          imageUrl={bannerDetails.imageUrl}
          type={bannerDetails.type as "left" | "right"}
          title={bannerDetails.title}
          description={bannerDetails.description}
        />
      </ContainerLayout>
    </section>
  );
};

export default WhatIsFlowellSection;
