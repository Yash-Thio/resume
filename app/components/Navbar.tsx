'use client'
export default function Navbar (){
  
    function HandleClick(l : string){
        console.log("clicked " + l);
    }

    const scrollToSection = (sectionId : string) => {
        const section = document.getElementById(sectionId);
        HandleClick(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    
    return(
        <nav className="fixed top-0 w-full">
            <ul className = "navbar">
                <li><button onClick={() => scrollToSection('home')}>HOME</button></li>
                <li><button onClick={() => scrollToSection('course')}>COURSES</button></li>
                <li><button onClick={() => scrollToSection('projects')}>PROJECTS</button></li>
                <li><button onClick={() => scrollToSection('achievements')}>ACHIEVEMENTS</button></li>
                <li><button onClick={() => scrollToSection('contact')}>CONTACT</button></li>
            </ul>
        </nav>
        
    )

  }
