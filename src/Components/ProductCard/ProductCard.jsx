import { BsCartPlusFill } from "react-icons/bs";

import { useContext } from "react";
import { CartContext } from "../../provider/Context/Context";

const ProductCard = ({ product }) => {
  const { title, category, image, price, qty, id } = product;
  const { carts, dispatch } = useContext(CartContext);
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
      className=" p-4 rounded-lg flex flex-col gap-5"
    >
      <div className="flex justify-center">
        <img className=" h-52" src={image} alt="" />
      </div>
      {/* content */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1">
          <h3 className="font-bold ">
            {title.length > 25 ? title.slice(0, 25) + "..." : title}
          </h3>
          <p className="text-[#9095A6]">{category}</p>
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-[#5B41FF] font-bold">${price} </p>
          <div className="text-[#ff41bd] flex gap-2 items-center">
            <span className="text-black font-bold">{qty}</span>
            <BsCartPlusFill
              onClick={() => {
                handleAddToCart();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
