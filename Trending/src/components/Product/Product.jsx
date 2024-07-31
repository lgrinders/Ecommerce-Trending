import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  // destructure product
  const { title, image, id, category, price } = product;
  // addToCart for button from CartContext
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="flex cursor-pointer flex-col items-center justify-between border border-neutral-200 p-5 duration-300 hover:shadow-lg bg-white">
        {/* each products image links to its respective page */}
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="max-h-48 max-w-48 duration-300 hover:scale-110"
          />
        </Link>
        <div className="mt-10 flex h-28 w-full flex-col justify-between">
          <Link to={`/product/${id}`}>
            <div className="font-bold">{price}</div>
            <div className="text-sm font-semibold hover:underline">
              {/* shortens the title if its over 20 chars */}
              {title.length > 20 ? title.substring(0, 60) + "..." : title}
            </div>
          </Link>
          <div>
            <button
              // addToCart fuction from CartContext
              onClick={() => addToCart(product, id)}
              className="cta flex w-full items-center justify-center"
            >
              <span className="hover-underline-animation flex items-center gap-1 pb-2">
                <IoMdCart className="text-orange-600" />
                <h2 className="text-sm font-bold">ADD TO CART</h2>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
