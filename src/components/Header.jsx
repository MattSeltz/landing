import { useState } from "react";
import { Li } from "./Li";

export const Header = () => {
  const [isClose, setIsClose] = useState(true);

  return (
    <header className="bg-blue-700 flex justify-between p-3 items-center fixed w-full z-10">
      <h1 className="text-xl font-bold text-neutral-100">Matías Seltzer</h1>

      <nav className="sm:block hidden">
        <ul className="flex gap-3 text-neutral-800 font-bold">
          <Li>Inicio</Li>
          <Li>Galería</Li>
          <Li>Testimonios</Li>
          <Li>Contacto</Li>
        </ul>
      </nav>

      {!isClose && (
        <nav className="absolute right-0 top-full rounded-br-xl rounded-bl-xl bg-blue-700/50 p-10 sm:hidden">
          <ul className="flex gap-3 text-neutral-800 font-bold">
            <Li>Inicio</Li>
            <Li>Galería</Li>
            <Li>Testimonios</Li>
            <Li>Contacto</Li>
          </ul>
        </nav>
      )}

      {isClose ? (
        <img
          className="sm:hidden hover:bg-blue-500 transition-colors bg-blue-700/50 rounded-sm h-10 w-10 text-neutral-50 text-xl cursor-pointer"
          src="https://img.icons8.com/?size=100&id=36389&format=png"
          alt="img"
          onClick={() => setIsClose(!isClose)}
        />
      ) : (
        <img
          className="sm:hidden hover:bg-blue-500 transition-colors bg-blue-700/50 rounded-sm h-10 w-10 text-neutral-50 text-xl cursor-pointer"
          src="
    https://img.icons8.com/?size=100&id=8112&format=png"
          alt="img"
          onClick={() => setIsClose(!isClose)}
        />
      )}
    </header>
  );
};
