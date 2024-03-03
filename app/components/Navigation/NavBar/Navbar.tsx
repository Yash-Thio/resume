"use client";
import React, { useState, useEffect } from "react";
export default function Navbar(props: any) {
  function HandleClick(l: string) {
    console.log("clicked " + l);
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    HandleClick(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 200; // Set your desired scroll threshold in pixels
  const backgroundColorClass =
    scrollPosition > scrollThreshold ? "bg-slate-950" : "bg-transparent";

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${backgroundColorClass} fixed top-0 z-50 w-full`}>
      <ul className="navbar">
        <li>
          <button
            className="font-apple-system font-semibold"
            onClick={() => scrollToSection("home")}
          >
            HOME
          </button>
        </li>
        <li>
          <button
            className="font-apple-system font-semibold"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            className="font-apple-system font-semibold"
            onClick={() => scrollToSection("course")}
          >
            COURSES
          </button>
        </li>
        <li>
          <button
            className="font-apple-system font-semibold"
            onClick={() => scrollToSection("projects")}
          >
            PROJECTS
          </button>
        </li>
        {/* <li><button className="font-apple-system font-semibold" onClick={() => scrollToSection('achievements')}>ACHIEVEMENTS</button></li> */}
        <li>
          <button
            className="font-apple-system font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
}
