import BrandImage from "@app/elements/BrandImage";
import ContainerLayout from "@app/elements/layouts/Container";

const BrandSection: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="section brands">
      <ContainerLayout>
        <div className="center-layout gap-y-20">
          <h2 className="text-h3 max-w-sm text-center">{title}</h2>
          <div className="grid grid-cols-3 max-w-[60%] w-full gap-y-10">
            <BrandImage url="/assets/brands/issa.png" alt="ace" />
            <BrandImage url="/assets/brands/wellcoaches.png" alt="ace" />
            <BrandImage url="/assets/brands/nasm.png" alt="ace" />
            <BrandImage url="/assets/brands/ace.png" alt="ace" />
            <BrandImage url="/assets/brands/pn.png" alt="ace" />
            <BrandImage url="/assets/brands/iin.png" alt="ace" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default BrandSection;
