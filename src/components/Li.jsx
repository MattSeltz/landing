export const Li = ({ children }) => {
  return (
    <li className="hover:border-b-2 transition-colors text-neutral-100">
      <a href={`#${children}`}>{children}</a>
    </li>
  );
};
