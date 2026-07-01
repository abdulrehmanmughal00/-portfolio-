"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Styles from "./Menu.module.css";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={Styles.menuWrapper}>
        <button
          type="button"
          className={Styles.menuBtn}
          onClick={() => {
            setOpen(!open);
          }}
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
              <GiHamburgerMenu className={Styles.icon} />
            )}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
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
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item, index) => (
                <motion.h3
                  key={item}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </motion.h3>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
