import NavItem from "./NavItem";

const NavMenu: React.FC<{ menuItems: any }> = ({ menuItems }) => {
  return (
    <ul className="nav-menu--container">
      {menuItems.map((item: any, index: number) => (
        <li key={index}>
          <NavItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
