import { motion } from "framer-motion";
import React from 'react';
export default function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="skill-card"
    >
      


    <div className="skill-card">
      <h3>{skill.category}</h3>
      <div className="skills-container">
        {skill.items.map((item, index) => (
          <span key={index} className="skill-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  

      <style jsx>{`
        .skill-card {
          background: var(--card-bg);
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .skill-category {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }
        
        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        
        .skill-item {
          background: var(--accent-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
      `}</style>
    </motion.div>
  );
}
  