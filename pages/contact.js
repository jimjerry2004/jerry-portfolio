import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Ong&apos;onge Jim Jerry</title>
      </Head>

      <Navbar />

      <main className="main">
        <section className="contact-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="section-title">Get In Touch</h1>
              <p className="section-subtitle">
                Feel free to reach out for collaborations or opportunities
              </p>
              
              <div className="contact-container">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="contact-card"
                >
                  <FiMail size={24} className="contact-icon" />
                  <h3>Email</h3>
                  <a href="mailto:ongongejerry@gmail.com">ongongejerry@gmail.com</a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="contact-card"
                >
                  <FiPhone size={24} className="contact-icon" />
                  <h3>Phone</h3>
                  <a href="tel:+254706826918">+254 706 826 918</a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="contact-card"
                >
                  <FiMapPin size={24} className="contact-icon" />
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .main {
          padding-top: 80px;
        }
        
        .contact-section {
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
        
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .contact-card {
          background: var(--card-bg);
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-icon {
          margin-bottom: 1rem;
          color: var(--accent-color);
        }
        
        h3 {
          margin-bottom: 0.5rem;
        }
        
        a {
          color: var(--accent-color);
          word-break: break-all;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}