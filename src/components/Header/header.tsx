import ShoppingCart from "../Cart/ShoppingCart.";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center justify-between items-center flex p-10">
      <ShoppingCart />
      <Link to="/">
        {" "}
        <h1 className="text-violet-400 text-3xl">Fake Shop</h1>
      </Link>
    </header>
  );
};

export default Header;
