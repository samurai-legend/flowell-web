import ContainerLayout from "@app/elements/layouts/Container";
import NavMenu from "./NavMenu";
import Button from "@app/elements/button/Button";
import Logo from "@app/elements/misc/Logo";

const Navbar: React.FC<{ type: "dark" | "light" }> = ({ type }) => {
  const menuItems = [
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Pricing", link: "/pricing" },
    {
      label: "Community",
      link: "/community",
      children: [
        { label: "Clubhouse", link: "/clubhouse" },
        { label: "Socials", link: "https://linktr.ee/weareflowell" },
      ],
    },
  ];

  return (
    <ContainerLayout as="nav" className="navbar--wrapper">
      <Logo type="light" url="/" />
      <NavMenu menuItems={menuItems} />
      <Button>Book A Call</Button>
    </ContainerLayout>
  );
};

export default Navbar;
