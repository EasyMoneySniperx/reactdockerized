import "tailwindcss/tailwind.css";
import {RiDashboardLine, RiLogoutBoxRLine} from "react-icons/ri";
import {MdOutlineSell} from "react-icons/md";
import {MdOutlineInventory} from "react-icons/md";
import {MdOutlineEmail} from "react-icons/md";

import React, {useState} from 'react';


const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = ()=>{
    setSidebar(!sidebar);
  }

  return (
    <div>
        <div className="text-center p-3">
        <img src="logomdl.png" alt="imagelogo"  />
        </div>
        <div className="flex flex-col justify-between h-[550px]">
        {/**Menu */}
        <nav>
          <ul>
            <li>
              <a href="#" className="flex items-center gap-4 hover:bg-red-700 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <RiDashboardLine/>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 hover:bg-red-700 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <MdOutlineSell/>
                Ventas
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 hover:bg-red-700 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <MdOutlineInventory/>
                Inventario
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 hover:bg-red-700 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
                <MdOutlineEmail/>
                Mensajes
              </a>
            </li>
          </ul>
        </nav>
        {/**imagen */}
        <div className="flex flex-col gap-3">
          <img src="libro2.png" alt="image"  />
          {/**cuadro texto */}
          <div className="bg-red-100 p-8 flex flex-col gap-3 rounded-3xl">
            <h3 className="text-xl text-center">Conocenos</h3>
            <p className="text-gray-500 text-center">
              lorem,jsndjhas ansdhb hjdns
            </p>
            <button className="bg-red-700 text-white p2 rounded-lg hover:bg-gray-900">
              Leer más
            </button>
          </div>
          <a href="#" className="flex items-center gap-4 hover:bg-red-700 p-4 text-gray-500 hover:text-white rounded-lg transition-colors font-semibold">
          <RiLogoutBoxRLine/>
          Logout
          </a>
        </div>
        
       </div>
      
       
       
    </div>
  );
}


export default Navbar;