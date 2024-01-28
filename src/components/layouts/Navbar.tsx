import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      className="w-full py-6 bg-[#F5F6F7] px-2 lg:px-0 fixed z-[999] top-0"
    >
      <nav className=" w-full max-w-[1280px] mx-auto flex h-full justify-between items-center">
        <span className="text-3xl font-bold text-[#000]">
          Event<span className="text-3xl font-bold text-[#0B63E5]"> 360</span>
        </span>{" "}
        <ul className="space-x-8">
          <NavLink to="/" className="text-base font-medium text-[#000]">
            Home
          </NavLink>
          <NavLink to="/about" className="text-base font-medium text-[#000]">
            About
          </NavLink>
          <NavLink to="/contact" className="text-base font-medium text-[#000]">
            Contact
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
