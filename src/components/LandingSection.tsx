import FactBox from "@app/elements/FactBox";
import VideoPopupCircle from "@app/elements/VideoPopupCircle";
import EmailCaptureForm from "@app/elements/form/hubspot/EmailCaptureForm";
import ContainerLayout from "@app/elements/layouts/Container";
import TwoGridColLayout from "@app/elements/layouts/TwoGridCol";

interface FactBoxInterface {
  icon: string;
  title: string;
  content: string;
  caption: string;
}

const LandingSection: React.FC<{
  title: string;
  description: string;
  videoUrl: string;
  facts: FactBoxInterface[];
}> = ({ title, description, videoUrl, facts }) => {
  return (
    <section className="section landing">
      <ContainerLayout>
        <TwoGridColLayout>
          <div className="flex flex-col justify-center items-start gap-y-5 z-10">
            <h1 className="text-h1 max-w-md">{title}</h1>
            <p className="text-body max-w-md">{description}</p>
            <EmailCaptureForm />
          </div>
          <VideoPopupCircle videoUrl={videoUrl} />
        </TwoGridColLayout>
        <div className="flex flex-row gap-x-10 relative z-20 justify-center items-stretch">
          {facts.map((fact: FactBoxInterface, index: number) => (
            <FactBox
              key={`${index}-${fact.title}`}
              icon={fact.icon}
              title={fact.title}
              content={fact.content}
              caption={fact.caption}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default LandingSection;
