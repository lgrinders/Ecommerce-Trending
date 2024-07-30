import { Link } from "react-router-dom";
import hero from "../../assets/img/Hero.jpg";
import heroText from "../../assets/img/HeroText.png";

const Hero = () => {
  return (
    <>
      <section className="bg-hero h-[800px] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full items-center justify-around">
          <div className="p-5">
            <div className="flex items-center gap-2">
              <div className="h-1 w-8 bg-orange-600"></div>
              <div className="font-semibold">TRENDING</div>
            </div>
            <div className="text-7xl font-light drop-shadow-2xl">
              AUTUMN STYLES SALE
            </div>
            <div className="pb-5 text-6xl font-bold drop-shadow-2xl">
              MEN & WOMENS
            </div>
            <Link to={"/"}>
              <button className="animate-shimmer inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                DISCOVER MORE
              </button>
            </Link>
          </div>
          <img src={heroText} className="hidden w-[220px] lg:block" />
        </div>
      </section>
    </>
  );
};

export default Hero;
