import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoLogoFreebsdDevil } from "react-icons/io";

export default function Header() {
  const test = () => {
    alert("DMC");
  };

  const options = [
    { name: "Signout", icon: IoLogoFreebsdDevil, action: test },
    { name: "Your profile", icon: IoLogoFreebsdDevil },
  ];

  return (
    <div className="px-4 py-2.5 bg-[#1f2937] w-full flex justify-end ">
      <div className="flex items-center gap-2">
        <h2 className="text-white">Exorcist is here</h2>
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800">
              <div className="inline-block rounded-full relative z-10 w-10 h-10 bg-cover bg-no-repeat bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNv5WRAp82uri5gWQpsEjLK9M7zXGLotB76w&usqp=CAU)]"></div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options?.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={option?.action}
                      className={`${active ? "bg-gray-100" : ""}
                      px-4 py-2 text-sm text-gray-700 flex gap-2 cursor-pointer 
                    `}
                    >
                      {React.createElement(option?.icon, { size: "20" })}
                      {option?.name}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
