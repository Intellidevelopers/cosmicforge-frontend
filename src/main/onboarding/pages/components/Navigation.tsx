import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // For hamburger icons

import { Input } from "../../../../components/ui/input";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo/logo_comsic_splash.svg";
import { useState } from "react";

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about-us" },
    { label: "features", href: "/features" },
    { label: "pricing", href: "/pricing" },
    // { label: "Blogs", href: "/blogs" },
    // { label: "Shop", href: "/shop" },
    // { label: "Forum", href: "/forum" },
    // { label: "Promotion", href: "/promotion" },
  ];

  return (
    <nav className="bg-white shadow-md z-50 w-full fixed top-0">
      <div className="flex justify-between items-center max-w-[90%] mx-auto py-4">
        {/* Logo and Search */}
        <div className="flex gap-2 items-center">
          <img src={Logo} className="h-[50px]" alt="Logo" />
          {/* <Input
            type="search"
            className="py-[4px] rounded-md text-sm hidden sm:block"
            placeholder="search"
          /> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-[26px] items-center text-sm font-medium">
            {navLinks.map((item, index) => (
              <Link to={item.href} key={index}>
                <li className="capitalize">{item.label}</li>
              </Link>
            ))}
            <Link to="/selectRole">
              <li className="capitalize text-[#272EA7]">Login</li>
            </Link>
            <Link to="/selectRole">
              <li className="capitalize text-white bg-[#272EA7] px-8 py-2 rounded-lg">
                Register
              </li>
            </Link>
          </ul>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col gap-4 p-6 text-sm font-medium">
              {navLinks.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  <li className="capitalize">{item.label}</li>
                </Link>
              ))}
              <Link to="/selectRole" onClick={() => setIsOpen(false)}>
                <li className="capitalize text-[#272EA7]">Login</li>
              </Link>
              <Link to="/selectRole" onClick={() => setIsOpen(false)}>
                <li className="capitalize text-white bg-[#272EA7] px-6 py-2 rounded-lg text-center">
                  Register
                </li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationComponent;
