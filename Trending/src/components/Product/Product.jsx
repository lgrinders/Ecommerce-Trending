import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Product = ({ product }) => {
  const { title, image, id, category, price } = product;

  return (
    <>
      <div className="flex cursor-pointer flex-col items-center justify-between border border-neutral-200 p-5 duration-300 hover:shadow-lg">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="max-h-52 max-w-52 duration-300 hover:scale-110"
          />
        </Link>
        <div className="mt-10 flex h-28 w-full flex-col justify-between">
          <Link to={`/product/${id}`}>
            <div className="font-bold">{price}</div>
            <div className="text-sm font-semibold hover:underline">
              {title.length > 20 ? title.substring(0, 60) + "..." : title}
            </div>
          </Link>
          <div>
            <button
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
