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
    <div className="projects" id="projects">
      {ProjectCard}
    </div>
  );
}
