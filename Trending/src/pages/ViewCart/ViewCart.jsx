import { useContext, useLayoutEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";

const ViewCart = () => {
  const { cart, itemAmount, total, clearCart } = useContext(CartContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="bg-neutral-200 px-5">
        <div className="container mx-auto flex flex-col items-center gap-10 pb-20 pt-32 md:flex-row">
          <div className="h-[640px] w-full overflow-y-scroll bg-white p-10 md:w-3/5">
            {cart.length === 0 ? (
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold tracking-widest text-neutral-200">
                CART EMPTY
              </div>
            ) : (
              cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })
            )}
          </div>
          <div className="flex h-[640px] w-full flex-col justify-between gap-5 bg-white p-10 font-semibold md:w-2/5">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>Order Subtotal</div>
                <div>$ {total}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div>Estimated Shipping</div>
                  <div className="font-md text-red-800">
                    Free Standard Shipping Applied!
                  </div>
                </div>
                <div className="font-bold text-red-800">Free</div>
              </div>
              <div className="mt-5 flex justify-between">
                <div>Estimated Tax</div>
                <div>$ 0.00</div>
              </div>
              <div className="flex justify-between border-b border-t py-5">
                <div className="text-lg font-bold">Estimated Order Total</div>
                <div>{total}</div>
              </div>
            </div>
            <div>
              <button className="flex h-14 w-full items-center justify-center bg-orange-600 font-bold tracking-widest text-white hover:bg-orange-300">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCart;
