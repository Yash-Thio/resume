'use client'
import { useState, useEffect } from "react";
import Coursedata from "./Coursedata";
import Coursecard from "./Coursecard";

import React from 'react'

export default function Coursecards() {
  
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
  
  
  const DataArray = Coursedata.data.courses;
  const[img,setimg] = React.useState("")
  const CourseCard = DataArray.map((course) => (
    <Coursecard
      key={course.id}
      name={course.name}
      courseLink={course.courseLink}
      language={course.language}
      by={course.by}
      image={course.image}
    />
  ));
  return (
    <div className={`${(width && width < 768)? "mb-20" : "h-screen"} flex flex-col gap-8 justify-center items-center`} id='course'>
          <h2 className="text-4xl font-bold text-slate-500 mb-4" >Courses</h2>
          <div className= "flex flex-wrap gap-10 justify-center items-center">
          {CourseCard}
        </div>
    </div>
  );
  
}
