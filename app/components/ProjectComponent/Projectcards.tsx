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
    <div className={`${(width && width < 768)? "mb-20" : "h-screen"} flex flex-col gap-8 justify-center items-center`} id="projects">
      <h2 className="text-4xl font-bold text-slate-500 mb-4" >Projects</h2>
      <div className=" flex flex-wrap gap-10 items-center justify-center " >
        {ProjectCard}
      </div>
    </div>
  );
}
