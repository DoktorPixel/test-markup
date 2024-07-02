import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "../../../../assets/icons/Icons";

interface MenuListItemProps {
  label: string;
  link: string;
}

export const MenuListItem = (props: MenuListItemProps) => {
  const { label, link } = props;
  const location = useLocation();
  const isActiveLink = location.pathname === link;

  return (
    <Link
      to={link}
      className={`menu_list_item
      ${isActiveLink ? "active" : ""}`}
    >
      <div className="label-wrapper">
        <div className="label">{label}</div>
        {label === "Products" || label === "Settings" ? <ArrowRight /> : ""}
      </div>
    </Link>
  );
};
