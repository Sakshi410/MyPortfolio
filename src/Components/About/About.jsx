import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/images1.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={about_profile} alt="Profile" style={{ width: '400px', height: '500px' }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a software developer based in Mumbai, Maharashtra, with extensive knowledge in a range of programming languages and technologies. My expertise includes Html, Css, Javascript and Bootstrap for front-end development, ensuring that web applications are both visually appealing and user-friendly. Additionally, I am proficient in React.js, which allows me to build dynamic, single-page applications with high performance and a seamless user experience.</p>
            <p>On the back-end, I am skilled in Java and Python, enabling me to develop robust and scalable server-side applications. My experience with data visualization tools like Power BI further enhances my ability to deliver comprehensive and insightful analytical solutions. Combining these skills, I am capable of managing full-stack development projects efficiently, from conceptualization to deployment, ensuring that all aspects of the application meet high standards of quality and functionality.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React.js</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Java</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Power BI</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>MySQL</p><hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>12+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
