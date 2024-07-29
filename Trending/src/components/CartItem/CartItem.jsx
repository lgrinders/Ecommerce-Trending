import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// import cart context
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt={title} />
        </Link>
        <div className="flex w-full flex-col">
          <div className="mb-2 flex justify-between">
            <Link
              to={`/product${id}`}
              className="font-md max-w-[240px] text-sm font-semibold uppercase hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer text-xl"
            >
              <IoMdClose className="text-neutral-500 transition hover:text-red-500" />
            </div>
          </div>
          <div className="flex h-[36px] gap-x-2 text-sm">
            <div className="noBlue flex h-full max-w-[100px] flex-1 items-center border font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex h-full flex-1 cursor-pointer items-center justify-center duration-300 hover:bg-neutral-100"
              >
                <IoMdRemove />
              </div>
              <div className="flex h-full items-center justify-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex h-full flex-1 cursor-pointer items-center justify-center duration-300 hover:bg-neutral-100"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="flex flex-1 items-center justify-end font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
