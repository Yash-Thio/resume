import React from "react";

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
      <button
        type="button"
        className="fixed right-0 p-5 inline-flex items-center md:hidden "
        onTouchEnd={props.toggle}
      >
        {/* Menu icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </button>
      <div
        className="sidebar-container fixed w-full h-screen overflow-hidden justify-center bg-black grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${props.isOpen ? "1" : "0"}`,
          top: ` ${props.isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onTouchEnd={props.toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul>
          <li>
            <button
              className="font-apple-system font-semibold"
              onTouchEnd={() => scrollToSection("home")}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              className="font-apple-system font-semibold"
              onTouchEnd={() => scrollToSection("course")}
            >
              COURSES
            </button>
          </li>
          <li>
            <button
              className="font-apple-system font-semibold"
              onTouchEnd={() => scrollToSection("projects")}
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              className="font-apple-system font-semibold"
              onTouchEnd={() => scrollToSection("achievements")}
            >
              ACHIEVEMENTS
            </button>
          </li>
          <li>
            <button
              className="font-apple-system font-semibold"
              onTouchEnd={() => scrollToSection("contact")}
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
