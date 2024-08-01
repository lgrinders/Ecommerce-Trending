import { useState } from "react";
import { LuArrowDownUp, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { sortingOptions } from "../../assets/sortingOptions";

const SortingBox = ({ sorted, setSorted }) => {
  // options visible
  const [sortedOpen, setSortedOpen] = useState(false);

  return (
    <>
      <div className="container relative z-10 mx-auto mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div
          className="relative flex h-12 cursor-pointer border border-neutral-200 bg-white text-xs font-semibold duration-200 hover:shadow-lg"
          onClick={() => setSortedOpen(!sortedOpen)}
        >
          <div className="flex w-full items-center justify-between px-5">
            <div className="flex items-center gap-1">
              <LuArrowDownUp />
              Sort: {sorted}
            </div>
            <div>{sortedOpen ? <LuChevronDown /> : <LuChevronUp />}</div>
          </div>

          <div
            className={`${sortedOpen ? "block shadow-2xl" : "hidden"} absolute top-12 w-full border border-neutral-200 bg-white`}
          >
            {sortingOptions.map((item, idx) => {
              return (
                <div
                  className="border-b border-neutral-200 px-5 py-2.5 text-xs duration-200 hover:font-bold"
                  onClick={() => setSorted(item.sortedBy)}
                  key={idx}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingBox;
