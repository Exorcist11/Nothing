import { HiOutlineMail } from "react-icons/hi";
import { SiMinutemailer } from "react-icons/si";
import { BsFillKeyFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState({
    errEmail: "",
    errPass: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if (info.email === "admin" && info.password === "admin") {
      navigate("/admin-home");
    } else {
      const checkErr = { ...err };
      if (info.email !== "admin") {
        checkErr.errEmail = "Email không hợp lệ!";
      } else {
        checkErr.errEmail = "";
      }
      if (info.password !== "admin") {
        checkErr.errPass = "Mật khẩu không hợp lệ!";
      } else {
        checkErr.errPass = "";
      }
      setErr(checkErr);
    }
  };


  return (
    <div className="h-screen flex">
      <div className="flex bg-gradient-to-tr from-blue-300 to-purple-400 w-1/2 justify-around items-center">
        <div className="flex flex-col items-center gap-2">
          <img src="/Ouroboros-logo.png" className="w-40 h-40" />
          <h1 className="font-bold text-4xl">Devil May Cry C.O</h1>
          <h1 className="uppercase font-medium text-cyan-800">Admin login</h1>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-3xl font-semibold">Ourobros</h1>
          <p>Welcome back!</p>
          <div>
            <div className="flex justify-center items-center gap-2 border-2 border-slate-300 rounded-xl p-3">
              <HiOutlineMail size={24} />
              <input
                type="text"
                placeholder="Email"
                className="border-none outline-none w-full text-base"
                name="email"
                onChange={handleChange}
              />
              <BiError
                size={24}
                className={`text-red-500 ${err?.errEmail ? "" : "hidden"} `}
              />
            </div>
            {/* <span
              className={`font-thin text-xs pl-6 ${
                err.errEmail ? "" : "hidden"
              } text-red-600`}
            >
              {err.errEmail}
            </span> */}
          </div>

          <div>
            <div className="flex justify-center items-center gap-2 border-2 border-slate-300 rounded-xl p-3">
              <BsFillKeyFill size={24} />
              <input
                type="Password"
                placeholder="Password"
                className="border-none outline-none w-full text-base"
                name="password"
                onChange={handleChange}
              />
              <BiError
                size={24}
                className={`text-red-500 ${err?.errPass ? "" : "hidden"}`}
              />
            </div>
            {/* <span
              className={`font-thin text-xs pl-6 ${
                err.errPass ? "" : "hidden"
              } text-red-600`}
            >
              {err.errPass}
            </span> */}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="bg-blue-600 rounded-lg p-2 w-1/2 text-white font-bold hover:bg-blue-500 flex justify-center items-center gap-2"
            >
              <SiMinutemailer />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
