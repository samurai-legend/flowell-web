"use client";
import ContainerLayout from "@app/elements/layouts/Container";
import NavMenu from "./NavMenu";
import Button from "@app/elements/button/Button";
import Logo from "@app/elements/misc/Logo";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar: React.FC<{ type: "dark" | "light" }> = ({ type }) => {
  const menuItems = [
    { label: "About", link: "/about" },
    // { label: "Blog", link: "/blog" },
    { label: "Pricing", link: "/pricing" },
    // {
    //   label: "Community",
    //   link: "/community",
    //   children: [
    //     { label: "Clubhouse", link: "/clubhouse" },
    //     { label: "Socials", link: "https://linktr.ee/weareflowell" },
    //   ],
    // },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();
  const [maxScrollY, setMaxScrollY] = useState(0);

  useEffect(() => {
    // Calculate the maximum scroll position
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = documentHeight - viewportHeight;
    setMaxScrollY(maxScroll);

    // Listen to the scroll event and handle navbar visibility
    const handleScroll = () => {
      const currentPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(
        currentPosition > prevScrollY && currentPosition > maxScroll * 0.2
      );
      setPrevScrollY(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isScrolled ? -100 : 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
      className={`navbar ${
        scrollY.get() > 0 ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <ContainerLayout className="navbar--wrapper">
        <Logo type="light" url="/" />
        {/* <NavMenu menuItems={menuItems} /> */}
        <Button>Book A Call</Button>
      </ContainerLayout>
    </motion.nav>
  );
};

export default Navbar;
