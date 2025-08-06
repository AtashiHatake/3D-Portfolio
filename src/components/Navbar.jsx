import { useState } from "react";
import logo from "../assets/generated-image.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const links = ["Home", "Projects", "Contact"];
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-[#222222] text-white">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-14 sm:h-16" />
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-6 sm:gap-8 ml-auto">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="relative group text-white font-medium text-sm sm:text-base"
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-[#F67E6F] group-hover:to-[#9E37F9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {link}
            </span>
          </a>
        ))}
      </div>

      {/* Hamburger for mobile*/}
      <button
        className="sm:hidden ml-auto z-10"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? (
          <CloseIcon className="text-white" />
        ) : (
          <MenuIcon className="text-white" />
        )}
      </button>

      {/* Burger menu links (mobile) */}
      {isOpen && (
        <div className="sm:hidden flex flex-col absolute w-full bg-[#222222] top-full left-0 z-20 items-center gap-6 py-6 animate-slide-down">
          {links.map((link) => (
            <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="relative group text-white font-medium text-sm sm:text-base"
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-[#F67E6F] group-hover:to-[#9E37F9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {link}
            </span>
          </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
