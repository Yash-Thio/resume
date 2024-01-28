"use client";
import { useState, useEffect } from "react";
import Navbar from "./NavBar/Navbar";
import Sidebar from "./SideBar/Sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log("toggle clicked");
    setIsOpen(!isOpen);
  };

  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", updateWidth);
      updateWidth();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", updateWidth);
      }
    };
  }, []);

  if (width && width < 768) {
    return <Sidebar isOpen={isOpen} toggle={toggle} />;
  } else {
    return <Navbar toggle={toggle} />;
  }
};

export default Navigation;
