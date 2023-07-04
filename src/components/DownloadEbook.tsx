import TwoGridColLayout from "@app/elements/layouts/TwoGridCol";
import Image from "next/image";

const DownloadEbook: React.FC<{ caption: string; title: string }> = ({
  caption,
  title,
}) => {
  return (
    <TwoGridColLayout className="download-ebook--conatiner">
      <div className="flex flex-col justify-start items-start gap-y-5">
        <span className="ebook-caption">{caption}</span>
        <h2 className="ebook-title">{title}</h2>
      </div>
      <div className="ebook-image">
        <Image
          src="/assets/ebook/book.png"
          alt="ebook-image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </TwoGridColLayout>
  );
};

export default DownloadEbook;
