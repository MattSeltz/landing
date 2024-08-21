export const People = ({ children }) => {
  return (
    <div className="shadow-sm shadow-blue-500 rounded-xl p-3 sm:flex items-center md:flex-col sm:bg-blue-300 sm:text-neutral-100">
      <img
        src={children}
        alt="img"
        className="h-32 w-32 object-cover rounded-xl mx-auto"
      />
      <p className="text-justify  m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
        expedita. Fugit nemo, dolore voluptas est corporis assumenda natus? Vel
        iste ducimus perspiciatis magni illum alias delectus culpa doloremque
        debitis consectetur.
      </p>
    </div>
  );
};
