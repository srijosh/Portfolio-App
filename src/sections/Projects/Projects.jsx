import styles from './ProjectsStyles.module.css';
// import face from '../../assets/face.png';
// import website from '../../assets/website.png';
import naruto from '../../assets/naruto.png';
import medical from '../../assets/medical.png';
import ProjectCard from '../../common/ProjectCard';
import coffee from '../../assets/coffee.png';
import news from '../../assets/news.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <ProjectCard
          src={face}
          link="https://github.com/srijosh/Face-Verification-Deep-Learning-"
          h3="Face Verification"
        /> */}
        <ProjectCard
          src={coffee}
          link="https://github.com/srijosh/Coffee-AI-Chatbot"
          h3="Coffee AI Chatbot"  
        />
        
        
        {/* <ProjectCard
          src={website}
          link="https://github.com/srijosh/Website-RAG-Chat.git"
          h3="Website Based RAG Chat"
        /> */}
        <ProjectCard
          src={news}
          link="https://github.com/srijosh/News-Category-Classifier-Web-Scraping-and-LLM-Fine-Tuning"
          h3="News Classifier"
        />
        <ProjectCard
          src={naruto}
          link="https://github.com/srijosh/NLP_Series_Analysis"
          h3="Naruto NLP Project"
        />
        <ProjectCard
          src={medical}
          link="https://github.com/srijosh/Medical-Chatbot-Vision-and-Voice.git"
          h3="Medical Chatbot Vision and Voice"
        />
      </div>
    </section>
  );
}

export default Projects;
