export const Footer = () => {
  return (
    <footer className="p-10" id="Contacto">
      <div className="flex justify-evenly max-w-xl mx-auto m-10">
        <img
          src="https://img.icons8.com/?size=60&id=62856&format=png"
          alt="img"
          className="cursor-pointer hover:shadow-xl rounded-full transition-shadow p-3"
        />
        <img
          src="https://img.icons8.com/?size=60&id=98960&format=png"
          alt="img"
          className="cursor-pointer hover:shadow-xl rounded-full transition-shadow p-3"
        />
        <img
          src="https://img.icons8.com/?size=60&id=60688&format=png"
          alt="img"
          className="cursor-pointer hover:shadow-xl rounded-full transition-shadow p-3"
        />
      </div>
      <p className="text-center">
        Derechos reservados <b>@Matías Seltzer</b>
      </p>
    </footer>
  );
};
