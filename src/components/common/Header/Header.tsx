import "./Header.scss";
import { LogoMob } from "../../../assets/icons/Icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";

import { useState } from "react";
import { MENU } from "../../../constants";
import { MenuListItem } from "../Sidebar/components/MenuListItem";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const BurgerHandler = () => {
    setIsShowMenu((prev) => {
      return !prev;
    });
  };
  return (
    <header>
      <div className="logo_wrapper">
        <Link to={ROUTES.HOME}>
          <LogoMob />
        </Link>
        <div className="logo_mask">beta</div>
        <div
          className={`header__burger ${isShowMenu ? "active" : ""}`}
          onClick={BurgerHandler}
        >
          <span />
        </div>
      </div>

      {isShowMenu && (
        <>
          <nav className="header__menu">
            {MENU.map(({ label, link }, index) => (
              <MenuListItem key={index} label={label} link={link} />
            ))}
          </nav>
          <div className="copyright">
            <span>Astromix © 2018 &#8212; 2020</span>
          </div>
        </>
      )}
    </header>
  );
};
