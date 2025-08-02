import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span>Ong\'onge Jim Jerry</span>
          </Link>
          
          <div className="nav-links">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .nav-link {
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: var(--accent-color);
        }
        
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
}