import React, { useState } from "react";
import { RiSettings4Line } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { IoLogoFreebsdDevil } from "react-icons/io";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const menus = [
    { name: "Home", link: "/home", icon: RiSettings4Line },
    {
      name: "User",
      link: "/user",
      icon: IoLogoFreebsdDevil,
      margin: true,
    },
  ];
  return (
    <div
      className={`bg-slate-600 min-h-screen ${
        open ? "w-72" : "w-16"
      } px-4 text-gray-100 duration-300`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, index) => (
          <Link
            to={menu?.link}
            key={index}
            className={`${menu?.margin && "mt-5"} ${
              location.pathname === menu?.link
                ? "border-b-[2px] border-blue-600"
                : ""
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:ease-in-out after:duration-300 `}
          >
            <div
              className={`${
                location.pathname === menu?.link ? "hover:text-white" : ""
              }`}
            >
              {React.createElement(menu?.icon, { size: "20" })}
            </div>
            <h2
              style={{ transitionDelay: `${index + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
