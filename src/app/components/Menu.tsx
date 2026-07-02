"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Styles from "./Menu.module.css";
import { ImMenu3 } from "react-icons/im";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={Styles.menuWrapper}>
        <button
          type="button"
          className={Styles.menuBtn}
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{
              rotate: open ? 180 : 0,
              scale: open ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <IoClose className={Styles.icon} />
            ) : (
              <ImMenu3 className={Styles.icon} />
            )}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className={Styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className={Styles.mobileMenu}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={Styles.menuItem}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;