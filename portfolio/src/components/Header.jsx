import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="h-16 bg-slate-950 flex justify-between items-center px-4 text-white fixed w-full">
      <div className="logo">
        <Logo />
      </div>
     
      <nav className="flex justify-end items-center space-x-4 font-rubik">
        <a href="#" className="text-white hover:text-blue-500">
          Home
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          About
        </a>
        <a href="#" className="text-white hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
