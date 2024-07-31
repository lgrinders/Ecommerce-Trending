import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
// import icons
import { FaShippingFast, FaCheck, FaInfoCircle } from "react-icons/fa";

const Checkout = () => {
  // cart context
  const { itemAmount, total, cart } = useContext(CartContext);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <>
      <div className="bg-neutral-200 px-5">
        <div className="container mx-auto flex flex-col items-center gap-10 pb-20 pt-32 md:flex-row">
          <div className="flex h-[640px] w-full flex-col gap-5 bg-white p-10 md:w-3/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xl text-orange-600">
                <FaShippingFast />
                <div className="font-bold">Shipping</div>
                <FaCheck />
              </div>
              <FaInfoCircle className="hover:text-neutral-500" />
            </div>
            <div className="font-semibold">Est Shipping: 4 days</div>
            <div className="h-56 w-full overflow-y-scroll">
              {cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>
            <div className="flex h-12 w-full items-center gap-2 border px-5">
              <label className="font-semibold" htmlFor="shipping">
                Shipping
              </label>
              <input
                className="mt-0.5 h-4 w-4 accent-black"
                defaultChecked
                type="radio"
              />
            </div>
          </div>
          <div className="flex h-[640px] w-full flex-col justify-between gap-5 bg-white p-10 font-semibold md:w-2/5"></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
