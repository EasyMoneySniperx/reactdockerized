import "tailwindcss/tailwind.css";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import React, {useState} from 'react';
import {RiMenu3Fill,RiCloseLine} from "react-icons/ri";
import Contenido from "../components/Contenido";

function Dashboard(props) {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = ()=>{
    setSidebar(!sidebar);
  }
  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
      <div className= {`fixed lg:static w-[75%] lg:w-full top-0 z-50 bg-white transition-all ${sidebar ? "-left-0" : "-left-full"} w-full h-full col-span-1 p-8 border-r`}>
      <Navbar/>
      </div>
      <div className='col-span-5'>
        <Header/>
        <Contenido/>
        </div>
         {/**  btn mnu movil   */}
       <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-red-700 p-2 text-white rounded-full text-2xl">
         {sidebar ? <RiCloseLine/> : <RiMenu3Fill/>}
       </button> 
    </div>
    
  )
}

export default Dashboard;