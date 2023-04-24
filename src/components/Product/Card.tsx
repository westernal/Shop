import React from "react";
import { Product } from "../../types/Types";
import { useDispatch } from "react-redux";
import { added } from "../../redux/slices/cart";

const Card = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <article className="m-5 bg-violet-950 grid rounded p-3 place-items-center grid-cols-1 w-64 h-full">
      <img
        src={product.image}
        alt="Avatar"
        className="w-60 h-60 rounded border-violet-400 border-solid border-2"
      />
      <p className="pt-2 text-center">{product.title}</p>
      <p className=" text-zinc-400">{product.category}</p>
      <section className="card-body mt-2">
        <p className="pt-2 text-center text-sm text-violet-300 ">
          {product.price} $
        </p>
        <button
          onClick={() => dispatch(added())}
          className="mt-3 p-2 rounded border-violet-400 border-solid border-2 hover:bg-violet-400 transition-all"
        >
          Add to cart
        </button>
      </section>
    </article>
  );
};

export default Card;
