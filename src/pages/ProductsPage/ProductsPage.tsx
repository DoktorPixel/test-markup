import Buttons from "../../assets/images/GroupButtons.svg";
import { ProductsCards } from "../../constants/ProductsCards";
import { Card } from "../../components/ui/Card/Card";

export const ProductsPage = () => {
  return (
    <div className="product_page">
      <div className="heading">
        <h1>Products</h1>
        <img src={Buttons} alt="Buttons" />
      </div>
      <div className="cards_wrapper">
        {ProductsCards.map(({ label, description, icon }, index) => (
          <Card
            key={index}
            label={label}
            description={description}
            icon={icon}
          />
        ))}
      </div>
      <div className="specification">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
};
