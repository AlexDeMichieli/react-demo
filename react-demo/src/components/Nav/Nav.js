import "./nav.css";
import Link from "../Link/Link";

const Nav = ({ links }) => {

  return (
    <div className="navigation-header-class">
      {links.map((item) => (
        <Link item={item}/>
      ))}
    </div>
  );
};

export default Nav;
