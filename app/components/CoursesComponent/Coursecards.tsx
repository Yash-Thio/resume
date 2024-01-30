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
        <div className={`${(width && width < 768)? "" : "h-screen"} flex flex-wrap gap-10 justify-center items-center mb-10`} id='course'>
          {CourseCard}
        </div>
  );
  
}
