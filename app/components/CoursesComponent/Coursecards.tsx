import Coursedata from "./Coursedata";
import Coursecard from "./Coursecard";

import React from 'react'

export default function Coursecards() {
    const DataArray = Coursedata.data.courses;
  const ProjectCard = DataArray.map((course) => (
    <Coursecard
      key={course.id}
      name={course.name}
      language={course.language}
      image={course.image}
    />
  ));
  return (
    <div className=" flex gap-10 justify-center" id='course'>
      {ProjectCard}
    </div>
  );
  
}
