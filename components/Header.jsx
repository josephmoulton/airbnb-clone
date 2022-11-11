import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto flex-row">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        ></Image>
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          className="pl-5 bg-transparent flex-grow outline-none
          text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon
          className="hidden
         md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeEuropeAfricaIcon className="h-6 cursor-pointer"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
