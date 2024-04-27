import Navigation from "./components/Navigation/Navigation";
import { Home } from "./components/Home";
import AboutSection from "./components/AboutComponent/AboutSection";
import Projectcards from "./components/ProjectComponent/Projectcards";
import Contact from "./components/ContactComponent/Contact";
import Coursecards from "./components/CoursesComponent/Coursecards";
import Footer from "./components/FooterComponent/Footer";

export default function main() {
  return (
    <main>
      <Navigation />
      <Home />
      <AboutSection />
      <Coursecards />
      <Projectcards />
      <Contact />
      <Footer />
    </main>
  );
}
