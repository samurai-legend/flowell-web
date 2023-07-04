import ContainerLayout from "@app/elements/layouts/Container";
import Logo from "@app/elements/misc/Logo";
import NavMenu from "../nav/NavMenu";

const Footer: React.FC = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Pricing", link: "/pricing" },
  ];
  return (
    <footer className="footer--wrapper">
      <ContainerLayout className="footer--container">
        <Logo type="dark" url="/" />
        <div className="footer--content">
          {/* <NavMenu menuItems={menuItems} /> */}
          <span className="text-caption text-white">
            © Flowell. 2023. All Rights Reserved.
          </span>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
