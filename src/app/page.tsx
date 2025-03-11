import Contact from "@/components/Contact";
import { ModalProvider } from "@/components/csr-components/ModalProvider";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectDetails from "@/components/ProjectDetails";
import Projects from "@/components/Projects";
import SkillSection from "@/components/Skills";

export default function Home() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-bg">
        <Hero />
        <div className="wrapper">
          <SkillSection />
          <Experience />
        </div>
        {/* <Projects /> */}
        <div className="wrapper">
          <Education />
          <Contact />
        </div>
        {/* <Footer /> */}
        <ProjectDetails />
      </div>
    </ModalProvider>
  );
}
