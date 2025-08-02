import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ong&apos;onge Jim Jerry | Electrical Engineer</title>
        <meta name="description" content="Portfolio of Ong'onge Jim Jerry, Electrical and Electronics Engineering student specializing in IoT and Renewable Energy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="main">
        <section className="hero-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content"
            >
              <div className="hero-text">
                <h1>Ong&apos;onge Jim Jerry</h1>
                <h2>Electrical & Electronics Engineer</h2>
                <p className="subtitle">
                  Specializing in IoT Systems, Renewable Energy, and Automation
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn">
                    View Projects
                  </a>
                  <a 
                    href="/cv.pdf" 
                    download="Ong&apos;onge_Jim_Jerry_CV.pdf"
                    className="btn secondary"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hero-image"
              >
              
<img
  src="/profile.jpg"
  alt="Ong&apos;onge Jim Jerry"
  width="500"
  height="300"
  className="jsx-ed49ac7a46151710"
/>
                
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Professional Profile</h2>
              <div className="about-content">
                <p>
                  Motivated Electrical and Electronics Engineering student with hands-on experience in IoT systems, 
                  renewable energy, and programming. Demonstrated ability to design practical solutions like 
                  automated tracking systems and fluid monitoring devices.
                </p>
                <p>
                  Strong academic background with leadership experience as peer mentor and student leader. 
                  Fluent in English, Kiswahili, Dholuo, and French.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .main {
          padding-top: 80px;
        }
        
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: linear-gradient(
            to right,
            var(--bg-color) 50%,
            var(--card-bg) 50%
          );
        }
        
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        
        .hero-text {
          flex: 1;
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }
        
        h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          background: var(--accent-color);
          color: white;
        }
        
        .btn.secondary {
          background: transparent;
          border: 2px solid var(--accent-color);
          color: var(--accent-color);
        }
        
        .hero-image {
          flex: 1;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .hero-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .about-section {
          background: var(--card-bg);
          padding: 5rem 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.2rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: var(--accent-color);
          margin: 1rem auto 0;
        }
        
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .about-content p {
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}