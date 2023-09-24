import { GrSearch } from "react-icons/gr";
import { BsBagHeart, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link to={"/"}>
        <div className="flex items-center gap-3 py-3">
          <img src="/Ouroboros-logo-blue.png" className="w-12 h-12" />
          <h1 className="font-bold text-[#2c2e60] uppercase text-lg">
            Ouroboros
          </h1>
        </div>
      </Link>

      <div className="border-2 rounded-xl flex items-center p-2 px-5 w-1/2 shadow-md bg-white">
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none w-full"
        />
        <GrSearch className="cursor-pointer" size={20} />
      </div>

      <div className="cursor-pointer flex gap-5">
        <div className="flex flex-col items-center hover:text-[#595db1]">
          <div className="flex">
            <BsPersonCircle size={30} />
          </div>
          <h1 className="text-sm font-semibold">Tài khoản</h1>
        </div>

        <div className="flex flex-col items-center hover:text-[#595db1]">
          <div className="flex">
            <BsBagHeart size={30} />
            <p className="flex h-0.5 w-0.5 items-center justify-center rounded-full bg-[#333565] p-2.5 -ml-2 text-xs text-white">
              2
            </p>
          </div>
          <h1 className="text-sm font-semibold">Giỏ Hàng</h1>
        </div>
      </div>
    </div>
  );
}
