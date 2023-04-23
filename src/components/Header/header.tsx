import ShoppingCart from "../Cart/ShoppingCart.";

const Header = () => {
  return (
    <header className="text-center justify-between items-center flex p-10">
      <ShoppingCart />
      <h1 className="text-violet-400 text-3xl">Fake Shop</h1>
    </header>
  );
};

export default Header;
