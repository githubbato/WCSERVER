<template>
  <div id="app">
    <header>
      <h1>Michael M. Usi Jr.</h1>
      <p>Web Developer</p>
    </header>

    <section class="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li><i class="email"></i> Email: michaelm@gmail.com</li>
        <li><i class="phone"></i> Phone: 09046597916</li>
        <li><i class="linkedin"></i> LinkedIn: <a href="https://linkedin.com/in/mike">linkedin.com/in/mike</a></li>
      </ul>
    </section>

    <section>
  <h2>Work Experience</h2>
  <div class="job">
    <p>Full-Stack Web Developer<br>
      Wakra Corp. - Wakanda<br>
      2011 – 2016
    </p>
    <ul>
      <li>Designed, developed, and maintained dynamic websites and web applications using HTML, CSS, JavaScript, and PHP.</li>

      <li>Developed responsive front-end interfaces with modern frameworks such as Vue.js, React for optimized user experience across devices.</li>

      <li>Managed databases (MySQL, MongoDB) for efficient data storage and retrieval, ensuring security and scalability.</li>

      <li>Collaborated with designers and project managers to ensure seamless implementation of UI/UX designs.</li>
    </ul>

    <p>Web Development Intern<br>
      Sparta Guncha - New York, USA<br>
      2017 - 2023
    </p>
    <ul>
      <li>Assisted in building and maintaining websites, primarily focused on front-end development using HTML, CSS, and JavaScript.</li>

      <li>Participated in coding sprints, contributed to Git repositories, and fixed bugs under the guidance of senior developers.</li>

      <li>Performed cross-browser testing and debugging to ensure compatibility across different platforms and devices.</li>

      <li>Worked closely with the team to implement design changes and enhance website performance and responsiveness.</li>
    </ul>
  </div>
</section>


    <section>
      <h2>Education</h2>
      <div class="education">
        <p>Bachelor Science in Information Technology with Specialization in Area Web Development</p>
        <p>Olagaje University - 2009</p>
      </div>
    </section>

    <section class="skills-section">
  <h2>Skills</h2>
  <div class="skills-grid">
    <div>Front-End Development: Expertise in HTML5, CSS3, JavaScript, and frameworks like Vue.js and React.</div>
    <div>Back-End Development: Proficiency in server-side programming using Node.js, Express.js, and PHP.</div>
    <div>Database Management: Experience with relational (MySQL) and NoSQL (MongoDB) databases for efficient data handling.</div>
    <div>Responsive Design: Skilled in creating mobile-first, responsive web applications with CSS frameworks like Bootstrap and Tailwind.</div>
  </div>
</section>

  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  background-color: #b8d8c5;
}

header {
  text-align: center;
  background-color: #3f8642;
  color: white;
  padding: 20px 0;
  border-radius: 8px;
}

header h1 {
  font-size: 36px;
  letter-spacing: 2px;
  font-weight: 600;
}

header p {
  font-size: 18px;
  margin-top: 5px;
}

section {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  border-bottom: 2px solid #42b983;
  padding-bottom: 5px;
  margin-bottom: 15px;
  color: #333;
  font-size: 24px;
  font-weight: 500;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 10px 0;
}

ul li i {
  margin-right: 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.skills-grid div {
  background-color: #e8f5e9;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-info ul li {
  font-size: 18px;
}
</style>

