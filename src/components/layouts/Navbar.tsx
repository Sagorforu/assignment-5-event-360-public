import { motion } from "framer-motion";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      className="w-full py-6 bg-[#F5F6F7] px-2 lg:px-0 fixed z-[999] top-0"
    >
      <nav className="w-full max-w-[1280px] mx-auto flex h-full justify-between items-center">
        <span className="text-3xl font-bold text-[#000]">
          Event<span className="text-3xl font-bold text-[#0B63E5]"> 360</span>
        </span>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <AlignJustify className="size-10" />
          </button>
          {isOpen && (
            <ul className="absolute top-full left-0 right-0 bg-white border mx-4 shadow-md mt-1">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-4 text-[#000] hover:bg-[#F0F5FF]"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-4 text-[#000] hover:bg-[#F0F5FF]"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 px-4 text-[#000] hover:bg-[#F0F5FF]"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className="block py-2 px-4 text-[#000] hover:bg-[#F0F5FF]"
                  onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        {/* for large device */}
        <ul className="hidden lg:flex space-x-8">
          <NavLink to="/" className="text-base font-medium text-[#000]">
            Home
          </NavLink>
          <NavLink to="/about" className="text-base font-medium text-[#000]">
            About
          </NavLink>
          <NavLink to="/contact" className="text-base font-medium text-[#000]">
            Contact
          </NavLink>
          <NavLink to="/admin" className="text-base font-medium text-[#000]">
            Dashboard
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
