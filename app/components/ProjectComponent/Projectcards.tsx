import Projectcard from "./Projectcard";
import Projectdata from "./Projectdata";

export default function Projectcards() {
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
    <div className="h-screen flex flex-wrap gap-7 items-center justify-center" id="projects">
      {ProjectCard}
    </div>
  );
}
