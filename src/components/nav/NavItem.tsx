const NavItem: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="nav-item--wrapper">
      <a href={item.link} className="nav-item--link">
        {item.label}
      </a>
      {item.children && (
        <div
          className="nav-item--child-container"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {item.children.map((childItem: any, index: number) => (
            <a key={index} href={childItem.link} className="nav-item--link">
              {childItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
