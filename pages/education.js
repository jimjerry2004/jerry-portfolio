import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import EducationCard from "../components/EducationCard";
import { education } from "../data/education";

export default function Education() {
  return (
    <>
      <Head>
        <title>Education | Ong'onge Jim Jerry</title>
      </Head>

      <Navbar />

      <main className="main">
        <section className="education-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="section-title">Education</h1>
              <p className="section-subtitle">
                My academic journey and qualifications
              </p>
              
              <div className="education-container">
                {education.map((edu, index) => (
                  <EducationCard key={index} education={edu} />
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
        
        .education-section {
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
        
        .education-container {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}