import "tailwindcss/tailwind.css";
import React from 'react';
import { RiLineChartLine } from "react-icons/ri";

const Contenido = ()  => {
    return (
        //grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8"
        //flex items-center justify-evenly p-4 w-full
        <section className="grid grid-cols-1 px-4 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-6">
        {/* Card 1 */}
        <div className="bg-red-700 p-8 rounded-xl text-gray-300 flex flex-col gap-5">
          <RiLineChartLine className="text-5xl" />
          <h4 className="text-2xl">Ventas</h4>
          <span className="text-4xl text-white"> $4.884.350</span>
          <span className="py-1 px-3 bg-red-900 rounded-full">
            + 10% aumento en el ultimo mes 
          </span>
        </div>
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <div className="flex items-center gap-4 bg-red-100 rounded-xl p-4">
            <span className="bg-red-700 text-white text-2xl font-bold p-4 rounded-xl">
              73
            </span>
            <div>
              <h3 className="font-bold">Total Libros</h3>
              <p className="text-gray-500">Aumento 30%</p>
            </div>
          </div>
          <div className="bg-red-100 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-red-700 text-white text-2xl font-bold p-4 rounded-xl">
                32
              </span>
              <div>
                <h3 className="font-bold">Nuevas Vistas</h3>
                <p className="text-gray-500">Esta Semana</p>
              </div>
            </div>
           
          </div>
          <div className="bg-red-100 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-red-700 text-white text-2xl font-bold p-4 rounded-xl">
                15
              </span>
              <div>
                <h3 className="font-bold">Nuevas Ventas</h3>
                <p className="text-gray-500">Hoy</p>
              </div>
            </div>
           
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">Nuevos Usuarios</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">CamyPony se ha registrado</h3>
                <p className="text-gray-500">Hace 39 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">EasyMoney se ha registrado</h3>
                <p className="text-gray-500">hace 1 dia</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">Portocarrero se ha registrado</h3>
                <p className="text-gray-500">hace 3 dias</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <a
                href="#"
                className="hover:text-primary-100 transition-colors hover:underline"
              >
                Ver todos los registrados
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contenido;