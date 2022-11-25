import "tailwindcss/tailwind.css";
import React from 'react';
import { RiArrowDownSLine, RiNotification3Line, RiSearchLine } from "react-icons/ri";

const Header = ()  => {
  return (

    <header className="flex items-center justify-between p-3 w-full">
        <form className="w-[40%]">
            <div className="relative">
                <RiSearchLine className="absolute left-2 top-3 bg-gray-50" />
        <input
          type="text"
          className="bg-gray-50 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
          placeholder="Buscar"
      />
             </div> 
  </form>
  <nav className="w-[40%] flex justify-end">
    <ul className="flex items-center gap-4">
        <li>
            <a href="#">
                <RiNotification3Line/>
            </a>
        </li>
        <li>
            <a href="#" className="flex items center gap-1">
                Juan Jose Revelo <RiArrowDownSLine/>
            </a>
        </li>
    </ul>
  </nav>

</header>
  );
}


export default Header;
