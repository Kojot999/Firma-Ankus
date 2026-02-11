import React from "react";
import { Outlet } from "react-router";
import { motion } from "framer-motion";
import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar";

export default function Layout() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };

  return (
    <div className="app-wrapper">
      <main className="main">
        <NavBar />
        <motion.div
          key={`"age_confirmed"`}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
        <Footer unbranded={true} />
      </main>
    </div>
  );
}
