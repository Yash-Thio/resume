import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projectcards from "./components/ProjectComponent/Projectcards";
import Contact from "./components/ContactComponent/Contact";
import Coursecards from "./components/CoursesComponent/Coursecards";

export default function main() {
  return (
    <main>
      <Navbar />
      <Home />
      <Coursecards />
      <Projectcards />
      <Contact />
    </main>
  );
}
