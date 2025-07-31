import React, { useState } from 'react';
import './Home.css';
import javaLogo from '../assets/java-logo.png';
import capgeminiLogo from '../assets/Capgemini-Logo.wine.png';
import accentureLogo from '../assets/Accenture-Logo.wine.png';
import brillioLogo from '../assets/Brillio-Logo.wine.png';
import psLogo from '../assets/Publicis_Sapient-Logo.wine.png';
import goldmanLogo from '../assets/Goldman_Sachs-Logo.wine.png';
import fiservLogo from '../assets/Fiserv-Logo.wine.png';
import ovoLogo from '../assets/ovo-energy-seeklogo.png';
import tammLogo from '../assets/tamm-abu-dhabi-government-seeklogo.png'; 
import bostonScientificLogo from '../assets/boston-scientific-logo-png-transparent.png';
import Header from '../components/Header';
import springIcon from '../assets/skills/spring.png';
import springBootIcon from '../assets/skills/spingboot.png';
import microservicesIcon from '../assets/skills/microservice.png';
import awsIcon from '../assets/skills/aws.png';
import kafkaIcon from '../assets/skills/kafka.png';
import snowflakeIcon from '../assets/skills/snowflake.png';
import oracleIcon from '../assets/skills/oracledb.png';
import jenkinsIcon from '../assets/skills/jenkins.png';
import gitlabIcon from '../assets/skills/gitlab.png';

const ProjectCard = ({ title, img, description, clientLogo, logoStyle }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="col-12 col-md-6 mb-4">
      <div className={`project-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="card-front d-flex flex-column justify-content-center align-items-center text-center p-3">
  <img
    src={img}
    className="img-fluid mb-2"
    alt={title}
    style={{
      ...logoStyle,
      objectFit: 'contain',
      maxHeight: 100,
      maxWidth: '80%',
    }}
  />
  <h5 style={{ whiteSpace: 'pre-line', marginBottom: '1rem' }}>{title}</h5>

  {clientLogo && (
    <div className="client-logo-wrapper mt-2 d-flex justify-content-center gap-3 flex-wrap">
      {(Array.isArray(clientLogo) ? clientLogo : [clientLogo]).map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`Client Logo ${idx + 1}`}
          style={{ height: 50, maxWidth: 100, objectFit: 'contain' }}
        />
      ))}
    </div>
  )}
</div>
        <div className="card-back d-flex align-items-start justify-content-start">
          <p style={{ whiteSpace: 'pre-line', margin: 0 }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <main className="landing text-white px-3 px-md-4">
    <section className="about-me mt-5">
      <h3>About Me</h3>
      <div className="about-content d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <div className="me-md-4 mb-3 mb-md-0">
          <p>
            Senior Software Developer with 7 years of experience in Java-based enterprise application development. Proven expertise in building and architecting scalable microservices using Spring Boot and Java. Hands-on with cloud integrations (AWS, Snowflake), Kafka messaging, and database performance tuning. Skilled in Agile delivery, CI/CD pipelines, and leading cross-functional teams to deliver robust, business-critical systems.
          </p>
        </div>
      </div>
    </section>

    <section className="skills mt-5">
      <h3>Skills</h3>
      <div className="skills-list d-flex flex-wrap gap-3">
        {[ 
          { name: 'Java', icon: javaLogo },
          { name: 'Spring', icon: springIcon },
          { name: 'Spring Boot', icon: springBootIcon },
          { name: 'Microservices', icon: microservicesIcon },
          { name: 'AWS', icon: awsIcon },
          { name: 'Kafka', icon: kafkaIcon },
          { name: 'Snowflake', icon: snowflakeIcon },
          { name: 'Oracle', icon: oracleIcon },
          { name: 'Jenkins', icon: jenkinsIcon },
          { name: 'GitLab', icon: gitlabIcon }
        ].map((skill, idx) => (
          <span
  key={idx}
  className="badge d-flex align-items-center bg-dark px-3 py-2"
  style={{ borderRadius: '1.5rem' }}
>
  <img
    src={skill.icon}
    alt={skill.name}
    style={{
      width: 24,
      height: 24,
      marginRight: 8,
      objectFit: 'contain',
    }}
  />
  <span style={{ fontSize: '0.9rem' }}>{skill.name}</span>
</span>
        ))}
      </div>
    </section>

    <section className="mb-5 text-center">
      <h2 className="mb-4">Work Experience</h2>
      <div className="row justify-content-center">
        <ProjectCard
          title={`Senior Associate Technology L2\nFebruary 2025 – Present`}
          img={psLogo}
          logoStyle={{ height: 100, filter: 'drop-shadow(0px 0px 4px #000000aa)' }} 
          clientLogo={goldmanLogo}
          description={`•\tGathered business requirements for Podium project to streamline onboarding process.\n•\tDeveloped Alloys app to extract and analyze real-time financial data from Lakehouse.\n•\tCreated Intelligence Hub that generated KCI matrix, simplifying business performance tracking.\n•\tBuilt Snowflake data warehouse integrated with AWS S3 and Datalake, resulting in 30% faster data access.\n•\tImproved unit test coverage using JUnit, helping reduce production issues.`}
        />
        <ProjectCard
          title={`Senior Engineer\nJanuary 2022 to Feburary 2025`}
          img={brillioLogo}
          logoStyle={{ height: 60, filter: 'drop-shadow(0px 0px 1px #000000aa)' }}
          clientLogo={fiservLogo}
          description={`•Engineered REST APIs and microservices to manage high-volume QR-based transactions.\n•\tDeveloped XML-to-REST middleware for Base24 switch, reducing integration time by 20%.\n•\tIntegrated LPMs across multiple geographies (India, HK, SG, MY) to support regional payments.\n•\tTuned Oracle queries and implemented schema changes, improving DB performance.\n•\tDesigned Kafka-based retry mechanisms to improve fault tolerance in inter-service communication.\n•\tAutomated QR generation and callback workflows to reduce manual intervention.\n•\tMentored junior developers to raise code quality and maintain project consistency.`}
        />
        <ProjectCard
          title={`Application Development Analyst\nAugust 2021 to January 2022`}
          img={accentureLogo}
          logoStyle={{ height: 120, filter: 'drop-shadow(0px 0px 4px #000000aa)' }}
          clientLogo={ovoLogo}
          description={`•Built microservices to automate email-based billing workflows.\n• Resolved over 20 UAT defects, enabling smoother go-live.\n• Designed a high-throughput proof-of-concept system that increased invoice handling by 40%.`}
        />
        <ProjectCard
          title={`Senior Software Engineer\nSeptember 2018 to August 2021`}
          img={capgeminiLogo}
          logoStyle={{ height: 120, filter: 'drop-shadow(0px 0px 4px #000000aa)' }}
          clientLogo={[tammLogo, bostonScientificLogo]} 
          description={`•Delivered a robust DED-Permits module and fixed UAT-raised issues promptly.\n• Coordinated with QA to accelerate bug fixes and improve release quality.\n• Integrated AD-Locker via secure HTTP, improving login speed by 25%.\n• Led a team focused on UI improvements and layout corrections.\n• Collaborated with testers to meet delivery schedules.\n•\tDeveloped and validated features before build integration, reducing deployment issues by 15%.`}
        />
      </div>
    </section>

    <section className="mb-5">
      <h2>Resume</h2>
      <p><a href="/Harsh_Gautam_Senior_Java_FSD_2025.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Download Resume</a></p>
    </section>

    <section className="mb-5">
      <h2>Contact</h2>
      <p>Email: harshkumargautam96@gmail.com</p>
      <p>Phone: +91-8860723885</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/harsh-kumar-gautam" target="_blank" rel="noreferrer">linkedin.com/in/harsh-kumar-gautam</a></p>
    </section>
  </main>
);

export default Home;