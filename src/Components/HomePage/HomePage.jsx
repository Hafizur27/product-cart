import { useContext, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CartContext } from "../../provider/Context/Context";

const HomePage = () => {
  const { carts, dispatch } = useContext(CartContext);
  const products = carts.productList;
  useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "Set_Data", payload: data.products }));
  }, [dispatch]);
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
