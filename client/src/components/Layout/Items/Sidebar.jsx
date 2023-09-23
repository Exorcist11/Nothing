import React, { useState } from "react";
import { RiSettings4Line } from "react-icons/ri";
import { GiOuroboros } from "react-icons/gi";
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
    <div className="text-gray-100 duration-300">
      <div className="py-4 px-4 flex justify-between items-center bg-[#1b2342]">
        <h1
          style={{ transitionDelay: `${0 + 3}00ms` }}
          className={`whitespace-pre duration-500  font-bold ${
            !open && "hidden"
          }`}
        >
          Devil May Cry
        </h1>

        <GiOuroboros
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`bg-[#101a32] min-h-screen ${
          open ? "w-72" : "w-16"
        } px-3 text-gray-100 duration-300 flex flex-col`}
      >
        <div
          className={`p-2 flex flex-col justify-center items-center gap-2 ${
            open ? "none " : "hidden"
          } after:ease-in-out after:duration-500 transition  `}
        >
          <div className="inline-block rounded-full relative z-10 w-20 h-20 bg-cover bg-no-repeat bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNv5WRAp82uri5gWQpsEjLK9M7zXGLotB76w&usqp=CAU)]"></div>
          <h1 className="uppercase font-bold text-xl">Devil May Cry</h1>
          <h3>Email</h3>
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
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
