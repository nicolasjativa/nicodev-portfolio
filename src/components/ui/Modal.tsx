"use client";
//React
import { ReactNode } from "react";
//Headless UI
import { Dialog } from "@headlessui/react";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";

//Interface
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

//Component Content
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} static className="relative z-50">
      {/* Animate Modal Entrance */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-end md:items-center justify-center md:p-4 pointer-events-none">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-screen-lg rounded-t-2xl bg-white dark:bg-zinc-900 shadow-[0px_5px_0px_0px_#000] pe-1 
                  md:rounded-2xl md:max-h-[90vh] h-[95vh] md:h-auto
                  overflow-hidden flex flex-col relative pointer-events-auto"
              >
                {/* Close Modal Btn */}
                <button
                  onClick={onClose}
                  className="absolute top-2 right-6 md:top-5 md:right-7 lg:top-5 lg:right-8 xl:top-5 xl:right-12 h-6 w-6 md:h-7 md:w-7 rounded-full bg-white border border-black flex items-center justify-center font-bold group shadow-[0px_3px_0px_0px_#000] hover:shadow-[0px_2px_0px_0px_#000] active:shadow-[0px_1px_0px_0px_#000] transition-shadow duration-200"
                >
                  <i className="group-hover:text-primary fi fi-br-cross-small leading-none text-base md:text-lg dark:text-black h-4 w-4 md:h-6 md:w-6"></i>
                </button>

                {/* Mobile Top Handle */}
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-5 md:hidden" />

                {/* Content */}
                <div className="p-6 pb-16 md:p-12 lg:p-14 lg:py-13 xl:px-20 xl:py-15 overflow-y-auto flex-1">
                  {children}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default Modal;
