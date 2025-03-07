'use client';
import { useEffect, useState } from 'react';

export default function Work() {
  const workExperiences = [
    {
      employer: "Software Architech Inc.",
      title: " Software Developer",
      date: "Aug 2024 – Present",
      location: "Remote, USA",
      description: [
        "Developed full-stack event-driven microservices with Spring Boot, Apache Kafka, and React, handling 50K+ daily transactions; cut latency by 40% via Kubernetes and scalable architecture",
        "Built centralized monitoring dashboard leveraging Prometheus, Grafana, and ELK Stack for real-time metrics/logs, integrating OpenObserve and DataDog for advanced analytics; slashed MTTR by 65% and achieved 99.95% uptime",
        "Streamlined PostgreSQL-based APIs and frontend state management incorporating Redis caching, indexed data structures, and Spring Data JPA; reduced query latency from 5s to 250ms, cloud costs by 30%, improving frontend performance",
        "Automated CI/CD pipelines with Jenkins and SonarQube via Test Driven Development (TDD) boosting release frequency",
      ],
      tags: ["Java", "Spring Boot", "Microservices", "Apache Kafka", "React", "Kubernetes", "PostgreSQL"],
      logo: "../images/work/company.png"
    },
    {
      employer: "Arizona State University",
      title: "Research Assistant - Living Repository",
      date: "Aug 2023 – May 2024",
      location: "Tempe, AZ",
      description: [
        "Orchestrated precise input of historical and legal data into Quill platform achieving exceptional 99.5% accuracy rate",
        "Spearheaded creating 20% more efficient index in Living Repository Initiative, a collaborative venture with Oxford University, contributing to 15% faster project timeline, employed Kafka for real-time data streaming and integration",
      ],
      tags: ["Python", "Data Migration", "Data Management", "Kafka"],
      logo: "../images/work/asu.png"
    },
    {
      employer: "Axisray",
      title: "Software Engineer Intern",
      date: "Jan 2022 – Apr 2022",
      location: "Ahmedabad, Gujarat, India",
      description: [
        "Collaborated with 8-member cross-functional team to design and implement scalable web applications using Spring MVC",
        "Integrated REST APIs employing OkHttp for JSON data retrieval and processing 100+ API endpoints across microservices",
        "Configured Spring Boot for enhanced application performance, auto-configuration, embedded servers, and production-ready metrics, leading to 25% response time improvement, enhanced code quality and maintainability using SonarQube"
      ],
      tags: ["Java", "Spring Boot", "API", "JavaScript"],
      logo: "../images/work/axisray.png"
    },
    {
      employer: "Arizona State University",
      title: "Data Research Aide",
      date: "Nov 2022 – Jan 2023",
      location: "Tempe, AZ",
      description: [
        "Led accelerated data filtration and cleaning process for Historical Newspapers Databases with over 18000 data points",
        "Utilized SQL queries and advanced functionalities for pertinent data acquisition, optimizing collection efficiency by 70%, cutting testing time by over 75% through automated testing and web scraping with BeautifulSoup4 and Selenium",
      ],
      tags: ["Python", "SQL", "Data Acquisition", "Selenium", "WebDriver"],
      logo: "../images/work/asu.png"
    },
    {
      employer: "Softvan",
      title: "Software Development Engineer Intern ",
      date: "Mar 2021 – Aug 2021",
      location: "Ahmedabad, Gujarat, India",
      description: [
        "Engineered Personal Cloud Storage System utilizing Amazon Web Services– S3 Bucket, cutting storage costs by 50% and enhancing system reliability by 75%, integrated Jenkins for CI/CD automating build and deployment processes",
        "Designed and executed CRUD operations for organization’s cloud, yielding 30% operational efficiency boost and decreased server maintenance costs, utilized JIRA for project management and task tracking",
        "Engaged in agile development environment, driving Scrum implementation and fostering collaborative decision-making"
      ],
      tags: ["AWS", "S3", "CRUD", "Agile", "CI/CD"],
      logo: "../images/work/softvan.png"
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const tabs = document.querySelector('.tabs');
    const highlighter = document.querySelector('.highlighter') as HTMLElement;
    const activeTabElement = document.querySelector('.tabs .active') as HTMLElement;

    if (tabs && highlighter && activeTabElement) {
      const updateHighlighter = () => {
        const tabRect = activeTabElement.getBoundingClientRect();
        highlighter.style.top = `${activeTabElement.offsetTop}px`;
        highlighter.style.height = `${tabRect.height}px`;
      };

      updateHighlighter();
      window.addEventListener('resize', updateHighlighter);

      return () => {
        window.removeEventListener('resize', updateHighlighter);
      };
    }
  }, [activeTab]);

  const handleTabClick = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(index + 1);
  };

  return (
    <section id="work" className="work-section">
      
      <div className="section-heading">Work Experience</div>
      <div className="work-container">
        <div className="work-tabs tabs">
          <span className="work-highlighter-track"></span> {/* Highlighter track */}
          {workExperiences.map((work, index) => (
            <a
              key={index}
              className={`work-tab work-tab-${index + 1} ${index + 1 === activeTab ? 'active' : ''}`}
              href="#work"
              data-tab={index + 1}
              onClick={(e) => handleTabClick(index, e)}
            >
              {work.employer}
            </a>
          ))}
          <span className="work-highlighter highlighter"></span>
        </div>
        <div className="work-content content">
          {workExperiences.map((work, index) => (
            <div
              key={index}
              className={`work-content__section content__section ${index + 1 === activeTab ? 'visible' : ''}`}
              data-tab={index + 1}
            >
              <div className="work-header">
                <img src={work.logo} alt={`${work.employer} logo`} className="work-logo" />
                <div>
                  <h3 className="work-title">{work.title}</h3>
                  <div className="work-employer">{work.employer}</div>
                </div>
              </div>
              <div className="work-details">{work.date} | {work.location}</div>
              <ul className="work-description">
                {work.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="work-tags">
                {work.tags.map((tag, idx) => (
                  <span key={idx} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
