import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a 2025 B.E. graduate who loves bringing ideas to life through
              full-stack Java development. Coding for me is not just work—it is a
              creative process where I turn concepts into clean, functional, and
              user-friendly applications. 
              </p>
              <p>
              I enjoy tackling tricky DSA problems,
              seeing them as brain workouts that sharpen my problem-solving
              skills. I am now excited to join a dynamic team where I can keep
              learning, share my ideas, and create awesome digital experiences
              together.</p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML, CSS & JavaScript</p>
            </div>
            <div className="about-skill">
              <p>React JS</p>
            </div>
            <div className="about-skill">
              <p>Spring Boot</p>
            </div>
            <div className="about-skill">
              <p>MySQL</p>
            </div>
            <div className="about-skill">
              <p>Git & Git Hub</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>TECHNOLOGIES LEARNED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>250+</h1>
          <p>DSA PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>500+</h1>
          <p>HOURS OF CODING PRACTICE</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
