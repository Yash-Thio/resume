

function Sidebar(props: any) {
  

  
  function HandleClick(l: string) {
    console.log("clicked " + l);
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    HandleClick(sectionId);
    if (section) {
      props.toggle();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      
      <div className="fixed right-0 p-5 inline-flex items-center md:hidden z-50">
      <label htmlFor="check">
        <input type="checkbox" checked={props.isOpen} readOnly={true} onClick={props.toggle} id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      </div>

      
      <div
        className="sidebar-container fixed w-full h-screen overflow-hidden justify-center bg-black grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${props.isOpen ? "1" : "0"}`,
          top: ` ${props.isOpen ? "0" : "-100%"}`,
        }}
      >
        


        <ul>
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
          {/* <li>
            <button
              className="font-apple-system font-semibold"
              onClick={() => scrollToSection("achievements")}
            >
              ACHIEVEMENTS
            </button>
          </li> */}
          <li>
            <button
              className="font-apple-system font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
