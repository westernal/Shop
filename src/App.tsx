import React from "react";
import ProductList from "./components/Product/ProductList";
import Header from "./components/Header/header";
import useSWR from "swr";
import API from "./functions/API";

function App() {
  const { data: products = { data: [] } } = useSWR(
    () => `products?limit=9`,
    (url) => API(url)
  );

  console.log(products);

  return (
    <main>
      <Header />
      <ProductList products={products?.data} />
    </main>
  );
}

export default App;
