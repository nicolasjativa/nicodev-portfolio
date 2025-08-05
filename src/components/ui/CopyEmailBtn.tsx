"use client";
//React
import { useState } from "react";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
//Utils
import { cn } from "@/lib/utils";


//Component Content
export default function CopyEmailButton() {

  //Is Email Copied State
  const [copied, setCopied] = useState(false);

  //Copy Email Function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('nicodevv@proton.me');//Copy Email to clipboard
      setCopied(true); //Change State
      setTimeout(() => setCopied(false), 2500); //Restart State
    } catch (err) {
      console.error("Error copying email", err); //Handle Error
    }
  };

  //Render Component
  return (
    <div>
      {/* Animated Btn Content */}
      <motion.button
        layout
        disabled={copied}
        onClick={handleCopy}
        aria-label="Copy Email"
        className={cn(
          "flex items-center justify-center gap-2 min-w-60 w-full border-2 border-black bg-black text-white text-xs font-semibold py-2.5 px-7 rounded-lg",
          "lg:text-sm lg:hover:border-white lg:hover:bg-white lg:hover:text-black transition",
          copied && "bg-zinc-900 border-zinc-900 transition"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            //Btn Content if is Copied
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.1 }}
              className="flex items-center gap-2"
            >
              Email copied! <i className="fi fi-br-check-circle leading-none text-sm lg:text-base text-green-400"></i>
            </motion.span>
          ) : (
            //Btn Neutral Content
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.1 }}
              className="flex items-center gap-2"
            >
              Copy my email <i className="fi fi-br-envelope leading-none text-sm lg:text-base"></i>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
