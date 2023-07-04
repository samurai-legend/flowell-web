import { title } from "process";

const BenefitBox: React.FC<{
  icon: string;
  title: string;
  caption: string;
}> = ({ icon, caption, title }) => {
  return (
    <div className="benefitbox--container">
      <i className={`benefiticon icomoon icon-${icon}`}></i>
      <div className="benefitbox--content">
        <span className="benefit-title">{title}</span>
        <span className="benefit-body">{caption}</span>
      </div>
    </div>
  );
};

export default BenefitBox;
