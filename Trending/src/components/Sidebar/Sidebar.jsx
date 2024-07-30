import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { SidebarContext } from "../../context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, itemAmount, total, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} fixed top-0 z-20 h-full w-full bg-white px-4 shadow-lg transition-all duration-300 md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex h-[400px] flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b sm:h-[640px]">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="gapy-y-3 mt-4 flex flex-col gap-3 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => clearCart()}
            className="flex h-12 w-12 cursor-pointer items-center justify-center bg-red-500 py-4 text-xl text-white duration-300 hover:bg-red-600 hover:shadow-md"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="flex w-full items-center justify-center bg-neutral-200 hover:bg-neutral-400 p-2 font-bold duration-300 hover:shadow-md"
        >
          View Cart
        </Link>
        <Link className="flex w-full items-center justify-center bg-orange-600 hover:bg-orange-700 p-2 font-bold text-white duration-300 hover:shadow-md">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
