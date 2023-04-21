import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div>
          <h1>John Doe</h1>
          <p>john.doe@example.com</p>
          <p>123 Main Street, Anytown USA</p>
        </div>
        <div>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
          <p>Github: github.com/johndoe</p>
        </div>
      </header>

      <section className="work-experience">
        <h2>Work Experience</h2>
        <div>
          <div className="company">
            <p>ACME Inc.</p>
          </div>
          <div className="position">
            <p>Software Engineer</p>
          </div>
          <div className="timeframe">
            <p>January 2019 - Present</p>
          </div>
          <ul className="responsibilities">
            <li>Develop and maintain web applications using React and Node.js</li>
            <li>Collaborate with cross-functional teams to deliver high-quality software</li>
            <li>Implement automated testing using Jest and Enzyme</li>
          </ul>
        </div>
      </section>

      <section className="personal-projects">
        <h2>Personal Projects</h2>
        <div>
          <div className="project-name">
            <p>Movie Search App</p>
          </div>
          <div className="project-description">
            <p>A web application that allows users to search for movies and view details about them.</p>
          </div>
          <ul className="technologies-used">
            <li>React</li>
            <li>Node.js</li>
            <li>OMDB API</li>
          </ul>
          <a href="https://github.com/johndoe/movie-search-app" className="project-link">
            https://github.com/johndoe/movie-search-app
          </a>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div>
          <div className="university">
            <p>University of Anytown</p>
          </div>
          <div className="degree">
            <p>B.S. Computer Science</p>
          </div>
          <div className="education-info">
            <p>GPA: 3.8</p>
            <p>Graduated: May 2018</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Agile Development</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;