import React from "react";
import { Link, NavLink } from "react-router-dom";

const navList = [
  { title: "Home", to: "/" },
  { title: "Sign up", to: "/register" },
  { title: "Sign in", to: "/signin" },
];
const Navigation = () => {
  return (
    <>
      <div className="w-full fixed bg-white">
        <div className="w-10/12 mx-auto  flex justify-between h-12 items-center">
          <Link to="/" className=" text-green-500 text-2xl font-bold">
            Vibes
          </Link>
          <div className="flex gap-4 mr-2">
            {navList &&
              Array.isArray(navList) &&
              navList.map((item, index) => {
                const { title, to } = item;
                return (
                  <NavLink
                    key={index}
                    to={to}
                    className="text-sm transition duration-300 hover:text-green-500 text-gray-500 font-medium"
                  >
                    {title}
                  </NavLink>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
