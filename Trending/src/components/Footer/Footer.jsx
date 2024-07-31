import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 p-10  border-t">
        <div className="flex w-1/4 items-center justify-center gap-5">
          <p className="font-bold">Connect With Us</p>
          <div className="flex cursor-pointer gap-3 text-3xl">
            <FaFacebook className="duration-100 hover:text-orange-600" />
            <FaTwitterSquare className="duration-100 hover:text-orange-600" />
            <FaInstagramSquare className="duration-100 hover:text-orange-600" />
            <FaYoutubeSquare className="duration-100 hover:text-orange-600" />
          </div>
        </div>
        <div className="sm:text-md flex flex-col items-center gap-3 text-xs">
          <div className="flex cursor-pointer gap-3 text-center">
            <p className="hover:underline">Feedback</p>
            <p className="hover:underline">Mission</p>
            <p className="hover:underline">Careers</p>
            <p className="hover:underline">News Room</p>
            <p className="hover:underline">Advertise With Us</p>
            <p className="hover:underline">TV</p>
            <p className="hover:underline">Newsletter Sign Up</p>
          </div>
          <div className="flex cursor-pointer gap-3 font-bold">
            <p className="hover:underline">Terms of Use</p>
            <p>|</p>
            <p className="hover:underline">Private Policy</p>
            <p>|</p>
            <p className="hover:underline">AdChoices</p>
            <p>|</p>
            <p className="hover:underline">Accessibility Statement</p>
            <p>|</p>
            <p className="hover:underline">Data Vendors</p>
          </div>
        </div>
        <div className="flex w-1/4 justify-center">
          <div className="font-bold">© Trending, LLC 2024</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
