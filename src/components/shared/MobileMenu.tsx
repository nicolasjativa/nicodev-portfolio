"use client";
//React Hooks
import { useEffect, useState } from "react";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
//Next Themes
import { useTheme } from "next-themes";
//Components
import NicoDevLogo from "./NicoDevLogo";
import ThemeToggle from "./ThemeToggle";
//Menu Content
import { NavContent } from "@/constants";

//Mobile Menu Component
export default function MobileMenu() {
  //Menu States
  const [isOpen, setIsOpen] = useState(false);
  //Actual Theme Detection
  const { theme } = useTheme();

  //Hide Page Scroll when menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close Menu if Some Theme has been Selected
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [theme]);

  //Render Menu Content
  return (
    <>
      {/* Open Menu Btn */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="text-xl md:text-2xl flex lg:hidden items-center justify-center h-6 w-6 md:h-7 md:w-7 md:me-6"
      >
        <i className="fi fi-br-menu-burger leading-none h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Animated Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Side Menu */}
            <motion.aside
              className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-zinc-900 z-50 p-6 rounded-e-2xl "
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 dark:border-zinc-700 pb-4">
                {/* Menu Logo */}
                <NicoDevLogo />
                {/* Close Menu Btn */}
                <button onClick={() => setIsOpen(false)} className="font-bold">
                  <i className="fi fi-br-cross-small text-lg md:text-lg"></i>
                </button>
              </div>
              {/* Menu Content */}
              <nav className="space-y-5">
                {/* Menu Tabs with Entrance Animation */}
                {NavContent.map((tab, i) => (
                  <motion.a
                    key={tab.href}
                    href={tab.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-base  font-medium text-black dark:text-zinc-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.12 }}
                  >
                    {tab.label === "Contact me" ? (
                     //If Tab is Contact Me Render Contact Btn
                     <div className="border-t border-gray-300 dark:border-zinc-700 pt-4 w-full mt-1">
                        <div className="flex justify-between items-center  bg-primary dark:bg-primary-dark w-full rounded-lg py-1.5 px-4 mt-3 text-white">
                          {tab.label} <i className={`${tab.icon} leading-none text-white`}></i>
                        </div>
                     </div>
                    ) : (
                      //Else Render Icon + Label Tab
                      <>
                        <i className={`${tab.icon} leading-none text-primary dark:text-primary-dark`}></i> 
                        {tab.label}
                      </>
                    )}
                  </motion.a>
                ))}
                {/* Theme Toggle with Entrance Animation */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: 5 * 0.12 + 0.1 }} // Short delay to enter after Menu Tabs
                  className="!mt-7 lg:hidden border-t border-gray-300 dark:border-zinc-700 pt-6"
                >
                  <ThemeToggle />
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
