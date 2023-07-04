import BenefitBox from "@app/elements/BenefitBox";
import ContainerLayout from "@app/elements/layouts/Container";
import DownloadEbook from "./DownloadEbook";

interface BenefitBoxInterface {
  icon: string;
  title: string;
  caption: string;
}

interface DownloadEbookInterface {
  title: string;
  caption: string;
}

const WhatYouGetSection: React.FC<{
  title: string;
  description: string;
  benefits: BenefitBoxInterface[];
  downloadEbook: DownloadEbookInterface;
}> = ({ title, description, benefits, downloadEbook }) => {
  return (
    <section className="section what-you-get">
      <ContainerLayout>
        <div className="flex flex-col justify-stretch items-stretch gap-y-10">
          <div className="center-layout gap-y-5">
            <h2 className="text-h2">{title}</h2>
            <p className="text-body max-w-lg text-center">{description}</p>
          </div>
          <div className="grid grid-cols-3 gap-x-10">
            {benefits?.map((benefit: BenefitBoxInterface, index: number) => (
              <BenefitBox
                key={`${index}-benefit-${benefit.icon}`}
                icon={benefit.icon}
                title={benefit.title}
                caption={benefit.caption}
              />
            ))}
          </div>
          <DownloadEbook
            title={downloadEbook.title}
            caption={downloadEbook.caption}
          />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default WhatYouGetSection;
