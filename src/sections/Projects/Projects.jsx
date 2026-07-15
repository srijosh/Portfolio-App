import styles from './ProjectsStyles.module.css';
import roam from '../../assets/roam.png';
import naruto from '../../assets/naruto.png';
import ProjectCard from '../../common/ProjectCard';
import coffee from '../../assets/coffee.png';
import news from '../../assets/news.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={coffee}
          link="https://github.com/srijosh/Coffee-AI-Chatbot"
          h3="Coffee AI Chatbot"  
        />
        <ProjectCard
          src={news}
          link="https://github.com/srijosh/News-Category-Classifier-Web-Scraping-and-LLM-Fine-Tuning"
          h3="News Category Classifier"
        />
        <ProjectCard
          src={naruto}
          link="https://github.com/srijosh/NLP_Series_Analysis"
          h3="Naruto NLP Project"
        />
        <ProjectCard
          src={roam}
          link="https://github.com/srijosh/RoamAI-Multi-Agent-Travel-Planner-with-LangGraph.git"
          h3="RoamAI Travel Planner"
        />
      </div>
    </section>
  );
}

export default Projects;
