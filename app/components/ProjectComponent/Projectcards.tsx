'use client'
import { useState, useEffect } from "react";
import Projectcard from "./Projectcard";
import Projectdata from "./Projectdata";

export default function Projectcards() {
  
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
  
  
  
  const DataArray = Projectdata.data.projects;
  const ProjectCard = DataArray.map((projects) => (
    <Projectcard
      key={projects.id}
      name={projects.name}
      techUsed={projects.techUsed}
      about={projects.about}
    />
  ));
  return (
    <div className={`${(width && width < 768)? "" : "h-screen"} flex flex-wrap gap-7 items-center justify-center mt-10`} id="projects">
      {ProjectCard}
    </div>
  );
}
