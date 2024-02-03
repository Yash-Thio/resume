'use client'
import React, { useTransition, useState, useEffect } from "react";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>Node.js</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Firebase</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Birla Institute of Technology, Mesra</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
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

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleDownload = () => {
    const pdfPath = `/pdf/YashPandeyResume.pdf`;

    const link = document.createElement('a');

    link.download = 'Yash Pandey Resume';
    link.href = pdfPath;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const selectedTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <div className={`${(width && width < 768)? "" : "h-screen"} grid-flow-row place-items-center`} id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center justify-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 text-center">
        <img alt="my picture" src="/images/My_Photo.jpg.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex gap-3">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <button type="button" onClick={handleDownload} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Resume</button>
          </div>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript,TypeScript, React, Node.js, Next.js, 
             Firebase, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTabData?.content}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutSection;
