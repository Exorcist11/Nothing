import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsPhone,
  BsLaptop,
  BsWatch,
  BsPlaystation,
  BsNewspaper,
} from "react-icons/bs";

export default function Navbar() {
  const location = useLocation();
  const menus = [
    { name: "Điện thoại", link: "/client-home", icon: BsPhone },
    { name: "Laptop", link: "/client-home", icon: BsLaptop },
    { name: "Đồng hồ", link: "/client-home", icon: BsWatch },
    { name: "Đồ chơi công nghệ", link: "/client-home", icon: BsPlaystation },
    { name: "Tin tức", link: "/client-home", icon: BsNewspaper },
  ];
  return (
    <div className="flex gap-7 relative bg-[#2c2e60] rounded-xl px-7 py-3 text-white justify-between">
      {menus?.map((menu, index) => (
        <Link
          to={menu?.link}
          key={index}
          className={`flex justify-center items-center p-1 flex-col gap-1 w-2/12 ${
            location?.pathname === menu?.link ? "border-b-2 border-red-600" : ""
          } font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-red-600 after:h-0.5 after:w-0 hover:after:w-full after:ease-in-out after:duration-300`}
        >
          <div>{React.createElement(menu?.icon, { size: "23" })}</div>
          <h1 className="uppercase text-xs">{menu?.name}</h1>
        </Link>
      ))}
    </div>
  );
}
