import Header from "../../components/Header/header";
import ProductList from "../../components/Product/ProductList";
import API from "../../functions/API";
import useSWR from "swr";

const Home = () => {
  const { data: products = { data: [] } } = useSWR(
    () => `products?limit=9`,
    (url) => API(url)
  );
  return (
    <main>
      <ProductList products={products?.data} />
    </main>
  );
};

export default Home;
