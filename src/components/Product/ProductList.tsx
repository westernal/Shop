import React from "react";
import Card from "./Card";
import { Product } from "../../types/Types";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <section className="m-5 items-stretch place-items-center justify-center grid gap-y-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: Product, index: number) => {
        return <Card product={product} key={index} />;
      })}
    </section>
  );
};

export default ProductList;
