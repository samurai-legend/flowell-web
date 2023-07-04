"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY || window.pageYOffset;
      window.scrollTo({
        top: currentPosition,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // @ts-ignore
  return <motion.div>{children}</motion.div>;
};

export default SmoothScroll;
