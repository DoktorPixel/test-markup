import { Logo } from "../../../assets/icons/Icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { MenuListItem } from "./components/MenuListItem";
import { MENU } from "../../../constants";
import "./Sidebar.scss";
import Rings from "../../../assets/images/Rings.png";

export const Sidebar = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="logo_wrapper">
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
        <div className="logo_mask">beta</div>
      </div>

      <nav className="menu_list">
        {MENU.map(({ label, link }, index) => (
          <MenuListItem key={index} label={label} link={link} />
        ))}
      </nav>
      <div className="ellipse_background">
        <img src={Rings} alt="Rings" />
      </div>
      <div className="copyright">
        <span>Astromix © 2018 &#8212; 2020</span>
      </div>
    </div>
  );
};
