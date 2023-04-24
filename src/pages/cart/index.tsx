import { useDispatch } from "react-redux";
import { reset } from "../../redux/slices/cart";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <main className="grid place-items-center">
      <button
        className="border-solid border-2 border-violet-300 p-2"
        onClick={() => dispatch(reset())}
      >
        Clear cart
      </button>
    </main>
  );
};

export default Cart;
