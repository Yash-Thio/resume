'use client'
import Coursedata from "./Coursedata";
import Coursecard from "./Coursecard";

import React from 'react'

export default function Coursecards() {
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
        <div className="h-screen flex flex-wrap gap-10 justify-center items-center" id='course'>
          {CourseCard}
        </div>
  );
  
}
