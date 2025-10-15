/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '../icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const linkpath = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
  ];

  // Scroll behavior: show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md`}
      variants={navVariants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col py-3 px-4 md:px-10">
        <div className="font-medium flex items-center justify-between w-full gap-6 text-lg font-outfit">
          {/* Mobile Menu Icon */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex md:hidden cursor-pointer z-20"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </motion.div>
          <motion.img
            src="/images/KQA3.png"
            alt="logo"
            className="w-[150px]  object-cover hidden md:flex"
            whileHover={{ scale: 1.05 }}
          />
          {/* Desktop Links */}
          <motion.div
            className="hidden md:flex md:gap-3 lg:gap-6 items-center"
            variants={navVariants}
          >
            {linkpath.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-green-100 font-semibold'
                      : 'text-[#333333] hover:text-green-100 transition-colors'
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Logo (Desktop) */}

          {/* Logo (Mobile) */}
          <motion.img
            src="/images/KQA.png"
            alt="logo"
            className="w-[70px] flex md:hidden ml-6"
            whileHover={{ scale: 1.05 }}
          />

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/contact"
              className="bg-green-100 text-white  p-3 md:px-6 md:py-3 rounded-xl text-sm md:text-base transition-all "
            >
              Contact Us
            </NavLink>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-40 px-5 py-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <motion.div className="flex flex-col gap-4">
                {linkpath.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 },
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-green-100 font-semibold block py-2'
                          : 'text-[#333333] block py-2 hover:text-green-100'
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
