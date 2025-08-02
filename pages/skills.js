import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";


import styles from '../styles/Skills.module.css';


export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Ong\'onge Jim Jerry</title>
      </Head>

      <Navbar />


  
      
      <main className="main">
        <section className="skills-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="section-title">Technical Expertise</h1>
              <p className="section-subtitle">
                My skills and areas of technical proficiency
              </p>
              
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
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
        
        .skills-section {
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
        
        .skills-container {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}