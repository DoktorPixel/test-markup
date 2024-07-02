import { IconType } from "react-icons";
import { ArrowPurple } from "../../../assets/icons/Icons";
interface MenuListItemProps {
  label: string;
  description: string;
  icon: IconType;
}
export const Card = (props: MenuListItemProps) => {
  const { label, description, icon: IconName } = props;
  return (
    <div className="card_wrapper">
      <div className="card_icon">
        <IconName />
      </div>
      <div className="card_info">
        <h3>
          {label}
          <span className="arrow_icon">
            <ArrowPurple />
          </span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
