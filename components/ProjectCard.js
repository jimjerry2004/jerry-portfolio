import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="project-card"
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="year">{project.year}</span>
      </div>
      
      <p className="description">{project.description}</p>
      
      {project.videoUrl && (
        <div className="video-container">
          <video controls width="100%">
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      <div className="skills-container">
        {project.skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
      
      {project.link && (
        <Link href={project.link} className="project-link" target="_blank">
          View Project
        </Link>
      )}

      <style jsx>{`
        .project-card {
          background: var(--card-bg);
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .year {
          color: var(--accent-color);
          font-weight: 600;
        }
        
        .description {
          margin-bottom: 1rem;
        }
        
        .video-container {
          margin: 1rem 0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        
        .skill-tag {
          background: var(--accent-color);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        
        .project-link {
          display: inline-block;
          margin-top: 1rem;
          color: var(--accent-color);
          font-weight: 600;
          transition: transform 0.2s ease;
        }
        
        .project-link:hover {
          transform: translateX(5px);
        }
      `}</style>
    </motion.div>
  );
}