const FactBox: React.FC<{
  icon: string;
  title: string;
  content: string;
  caption: string;
}> = ({ icon, title, content, caption }) => {
  return (
    <div className="factbox--container">
      <i className={`facticon icomoon icon-${icon}`}></i>
      <div className="factbox--content">
        <span className="fact-title">{title}</span>
        <span className="fact-value">{content}</span>
        <span className="fact-caption">{caption}</span>
      </div>
    </div>
  );
};

export default FactBox;
