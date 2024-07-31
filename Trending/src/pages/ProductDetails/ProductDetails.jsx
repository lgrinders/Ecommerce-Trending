import { useContext, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductProvider";

export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="flex h-screen items-center justify-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className="flex h-screen items-center pb-12 pt-32 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="mb-8 flex flex-1 flex-col items-center justify-center gap-5 p-5 lg:mb-0">
              <img
                src={image}
                alt={title}
                className="max-w-[200px] lg:max-w-sm"
              />
              <div className="flex gap-5">
                {[...Array(4)].map(() => {
                  return <div className="h-16 w-16 bg-neutral-300"></div>;
                })}
              </div>
            </div>
            <div className="flex-1 px-2 text-center lg:text-left">
              <h1 className="mx-auto mb-2 max-w-[450px] text-[26px] font-medium lg:mx-0">
                {title}
              </h1>
              <div className="mb-6 text-xl font-medium text-orange-600">
                $ {price}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
