import React from "react";

const Dropdown = ({ options, title, fnc }) => {
  return (
    <div className="relative inline-block group">
      <span
        className={`text-zinc-300 font-semibold w-[10.5vw]  rounded-lg  px-3 cursor-pointer flex items-center justify-between uppercase ${
          title == "now_playing" ? "text-md" : "text-lg"
        }`}
      >
        {title ? title : "Category"}
        <i className=" ri-arrow-drop-down-fill text-zinc-200 hover:text-[#665BCD] ml-2 text-4xl"></i>
      </span>
      <div className="hidden absolute pt-1 w-full rounded-md bg-white shadow-lg z-50 group-hover:block overflow-hidden ">
        {options.map((option, index) => (
          <div
            onClick={fnc}
            key={index}
            className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 uppercase  "
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
