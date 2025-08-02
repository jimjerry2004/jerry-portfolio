import { motion } from "framer-motion";

export default function EducationCard({ education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="education-card"
    >
      <div className="education-header">
        <h3>{education.institution}</h3>
        <span className="period">{education.period}</span>
      </div>
      
      <h4 className="degree">{education.degree}</h4>
      
      <ul className="details-list">
        {education.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      <style jsx>{`
        .education-card {
          background: var(--card-bg);
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        h3 {
          font-size: 1.3rem;
          color: var(--accent-color);
        }
        
        .period {
          background: var(--accent-color);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        
        .degree {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .details-list {
          padding-left: 1.5rem;
        }
        
        .details-list li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </motion.div>
  );
}