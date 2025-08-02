import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Ong\'onge Jim Jerry</title>
      </Head>

      <Navbar />

      <main className="main">
        <section className="projects-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="section-title">My Projects</h1>
              <p className="section-subtitle">
                Here are some of my notable projects in IoT, automation, and energy systems
              </p>
              
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .main {
          padding-top: 80px;
        }
        
        .projects-section {
          padding: 4rem 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        
        .section-subtitle {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-color);
          opacity: 0.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}