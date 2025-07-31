import React from 'react';
import './Portfolio.css';
import javaLogo from '../assets/skills/java-logo.png';
import springLogo from '../assets/skills/spring.png';
import awsLogo from '../assets//skills/aws.png';
import kafkaLogo from '../assets/skills/kafka.png';
import sqlLogo from '../assets/skills/oracledb.png';
import Header from '../components/Header';

const Portfolio = () => (
  <div className="portfolio-container">
    <Header />

    <section className="bio-section">
      <img src="/avatar.png" alt="Harsh Avatar" className="avatar" />
      <p className="bio-text">
        My name is Harsh Gautam, a self-driven Senior Java Developer with 7+ years of experience building scalable microservices in fintech. Passionate about clean code, cloud-native architecture, and solving complex backend challenges.
      </p>
    </section>

    <section className="interests">
      <span className="pill">Fintech</span>
      <span className="pill">Backend</span>
      <span className="pill">Microservices</span>
      <span className="pill">AWS</span>
    </section>

    <section className="skills-grid">
      <div className="skill-item"><img src={javaLogo} alt="Java" /><span>Java</span></div>
      <div className="skill-item"><img src={springLogo} alt="Spring Boot" /><span>Spring Boot</span></div>
      <div className="skill-item"><img src={kafkaLogo} alt="Kafka" /><span>Kafka</span></div>
      <div className="skill-item"><img src={sqlLogo} alt="SQL" /><span>SQL</span></div>
      <div className="skill-item"><img src={awsLogo} alt="AWS" /><span>AWS</span></div>
    </section>

    <section className="experience-section">
      <div className="card">
        <h3>Senior Associate Technology L2</h3>
        <p className="company">Publicis Sapient <span className="duration">2025 - Now</span></p>
        <ul>
          <li>Built Alloys, a real-time data processing platform using Spring Boot and Snowflake</li>
          <li>Developed Intelligence Hub generating business KCI matrices</li>
          <li>Integrated Snowflake with AWS S3 and DataLake</li>
        </ul>
      </div>

      <div className="card">
        <h3>Senior Engineer</h3>
        <p className="company">Brillio <span className="duration">2022 - 2025</span></p>
        <ul>
          <li>Developed QR-payment microservices and XML-based middleware</li>
          <li>Implemented Kafka retry mechanisms and Oracle performance tuning</li>
        </ul>
      </div>

      <div className="card">
        <h3>Application Development Analyst</h3>
        <p className="company">Accenture <span className="duration">2021 - 2022</span></p>
        <ul>
          <li>Automated email billing workflows with microservices</li>
          <li>Increased invoice throughput by 40%</li>
        </ul>
      </div>
    </section>

    <section className="education-section">
      <div className="card">
        <h3>Bachelor of Technology</h3>
        <p className="company">AKTU University <span className="duration">2013 - 2017</span></p>
        <p>Computer Science & Engineering</p>
      </div>
    </section>

    <section className="footer-contact">
      <p>📧 harshkumargautam96@gmail.com</p>
      <p>📞 +91 8860723885</p>
      <p>🌐 linkedin.com/in/harsh-kumar-gautam</p>
    </section>
  </div>
);

export default Portfolio;