import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// sidebar context
import { SidebarContext } from "../../context/SidebarContext";
// cart context
import { CartContext } from "../../context/CartContext";
// import icons
import { RiShoppingBag4Fill } from "react-icons/ri";
// import logo
import logo from "../../assets/img/logo.svg";

const Header = () => {
  // use isOpen sate from SidebarContext
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);

  // event listener for if user has scrolled down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed z-20 w-full px-5 transition-all`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-[40px]" src={logo} alt={"Trending-logo"} />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex max-w-[50px] cursor-pointer"
        >
          <RiShoppingBag4Fill className="text-3xl" />
          <div className="absolute -right-2 -top-1 flex h-[20px] w-[19px] items-center justify-center rounded-full bg-orange-600 text-xs text-white">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
