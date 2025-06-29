import React, { useState } from "react";
import "./styling/resume.css"; // Your CSS file
import { useEffect } from "react";
import axios from "axios";
const ResumeSection = ({ title, items, isActive }) => {
  return (
    <section className="resume-section">
      <h3 className="section-title">{title}</h3>
      <div className={`section-content ${isActive ? "active" : ""}`}>
        <ul>
          {items.length > 0 ? (
            items.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li className="no-items-text">Nothing listed.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

const Resume = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/all")
      .then((response) => {
        setResumeData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error("Failed to fetch resume data:", error);
      });
  }, []);

  const [activeSections, setActiveSections] = useState({
    interests: true,
    skills: false,
    experience: false,
    extras: false,
  });

  const toggleSection = (field) => {
    setActiveSections((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const sectionKeys = Object.keys(resumeData).filter((k) =>
    Array.isArray(resumeData[k])
  );

  return (
    <div className="page-container">
      {/* This card will animate on load */}
      <div className="resume-card">
        <div className="resume-header">
          <h2 className="user-name">{resumeData.name}</h2>
          <p className="user-email">{resumeData.email}</p>
        </div>

        <div className="toggle-group">
          {sectionKeys.map((section) => (
            <button
              key={section}
              className={`toggle-btn ${
                activeSections[section] ? "active" : ""
              }`}
              onClick={() => toggleSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="resume-body">
          {sectionKeys.map((key) => (
            <ResumeSection
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              items={resumeData[key]}
              isActive={activeSections[key]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
