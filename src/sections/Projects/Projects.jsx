import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/face.png';
import freshBurger from '../../assets/website.png';
import hipsster from '../../assets/naruto.png';
import fitLift from '../../assets/medical.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/srijosh/Face-Verification-Deep-Learning-"
          h3="Face Verification"
        />
        
        <ProjectCard
          src={freshBurger}
          link="https://github.com/srijosh/Website-RAG-Chat.git"
          h3="Website Based RAG Chat"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/srijosh/NLP_Series_Analysis"
          h3="Naruto NLP Project"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/srijosh/Medical-Chatbot-Vision-and-Voice.git"
          h3="Medical Chatbot Vision and Voice"
        />
      </div>
    </section>
  );
}

export default Projects;
