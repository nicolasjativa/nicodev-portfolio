"use client";
import React from "react";
//Content
import { NavContent } from "@/constants";
//Components
import Container from "./Container";
import NicoDevLogo from "./NicoDevLogo";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
//Framer Motion
import { motion } from "framer-motion";
//Hooks
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { useActiveSection } from "@/hooks/useActiveSection";
//Utils
import { cn } from "@/lib/utils";


//Header Content
const Header = () => {

  //Sticky Header Hook
  const { isSticky, hasScrolled } = useStickyHeader();
  //Extract Section Ids
  const sectionIds = NavContent.map(({ href }) => href.replace("#", "")).concat("contact");
  //Active Section Observer
  const activeSection = useActiveSection(sectionIds);

  //Render Header
  return (
    <motion.header //Framer Motion to Animate Header
      initial={false}
      animate={{y: !hasScrolled ? 0 : isSticky ? 0 : -100}}
      transition={{duration: 0.4}}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white",
        "dark:bg-zinc-950",
        isSticky && "shadow-md dark:shadow-none dark:border-b dark:border-gray-800"
      )}
    >
      {/* Header Content */}
      <Container>
        <div className="w-full flex justify-between md:justify-start items-center py-3 md:py-4">
          {/* Mobile & Tablet Menu */}
          <MobileMenu />

          {/* Logo */}
          <button aria-label="Go to Start">
            <NicoDevLogo />
          </button>

          {/* Navigation Wrapper */}
          <div className="hidden md:flex gap-6 items-center ms-auto">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6">
              {NavContent.filter((tab) => tab.href !== "#contact").map(
                ({ href, label }, i) => (
                  //Nav Tabs
                  <a key={i}
                     href={href}
                     className={cn(
                      "text-sm font-medium transition hover:!text-primary dark:hover:text-primary text-zinc-700",
                      activeSection === href.replace("#", "")
                        ? "text-primary dark:text-primary-dark font-semibold"
                        : "text-black dark:text-white"
                  )}>
                    {label}
                  </a>
                ))}
            </nav>
            {/* Contact Btn Tablet & Desktop */}
            <a href="#contact">
              <button
                disabled={activeSection === "contact"}
                className={cn("hidden md:block text-sm font-medium border-2 border-black hover:bg-black hover:text-white transition px-3 py-1.5 rounded-lg",
                  "dark:border-primary-dark dark:hover:bg-primary-dark",
                  activeSection === "contact" && "!bg-black text-white dark:!bg-primary-dark"
                )}>
                Contact me
              </button>
            </a>
            {/* Theme Toggle */}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
          </div>

          {/* Contact Icon Mobile */}
          <a href="#contact">
            <button
              aria-label="Scroll to Contact Section"
              className="md:hidden text-xl flex items-center justify-center h-6 w-6"
            >
              <i className="fi fi-br-comment-alt leading-none h-5 w-5"></i>
            </button>
          </a>
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
