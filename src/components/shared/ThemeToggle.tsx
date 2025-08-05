"use client";

//React Hooks
import { useEffect, useState } from "react";
//Next Themes
import { useTheme } from "next-themes";
//Framer Motion
import { motion, LayoutGroup } from "framer-motion";
//Utils
import { cn } from "@/lib/utils";

//Theme Toggle Content
const ThemeToggle = () => {

  //Use Theme
  const { setTheme, theme } = useTheme();

  //Mounted State
  const [mounted, setMounted] = useState(false);

  //Mounted Theme Checker
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  //Theme Options
  const options = [
    { value: "light", icon: <i className="fi fi-br-brightness leading-none"></i> },
    { value: "dark", icon: <i className="fi fi-br-moon leading-none"></i> },
    { value: "system", icon: <i className="fi fi-br-laptop leading-none"></i> },
  ];

  //Component Toggle
  return (
    <LayoutGroup>
      <div className="relative flex items-center gap-2 p-1 bg-muted rounded-full border dark:border-0 dark:bg-zinc-800 w-fit">
        {/* Theme Options */}
        {options.map(({ value, icon }) => {
          //Flag to Check if Theme is active
          const isActive = theme === value;
          //Render Theme Option Btn
          return (
            <button key={value} onClick={() => setTheme(value)} className={cn(
                "relative z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors",
                isActive ? "text-white" : "text-muted-foreground")}
            >
              {/* If Active Show Color Background with Animation */}
              {isActive && (
                <motion.div 
                  layoutId="theme-toggle-bg"
                  className="absolute inset-0 bg-primary dark:bg-primary-dark rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {/* Theme Icon */}
              {icon}
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export default ThemeToggle;
