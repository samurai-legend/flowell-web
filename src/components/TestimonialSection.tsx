import HoverVideoBox from "@app/elements/HoverVideoBox";
import ContainerLayout from "@app/elements/layouts/Container";

interface VideoBoxInterface {
  name: string;
  quote: string;
  videoUrl: string;
}
const TestimonialSection: React.FC<{
  title: string;
  desription: string;
  videos: VideoBoxInterface[];
}> = ({ title, desription, videos }) => {
  return (
    <section className="section testimonial">
      <ContainerLayout>
        <div className="center-layout">
          <h2 className="text-h2">{title}</h2>
          <p className="text-body text-center max-w-4xl">{desription}</p>
        </div>
        <div className="spacer"></div>
        <div className="grid grid-cols-3 gap-x-10">
          {videos?.map((video: VideoBoxInterface, index: number) => (
            <HoverVideoBox
              key={`videobox-${index}-${video.name}`}
              name={video.name}
              quote={video.quote}
              url={video.videoUrl}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TestimonialSection;
