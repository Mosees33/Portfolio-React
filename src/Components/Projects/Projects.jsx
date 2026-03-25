import theme_pattern from "../../assets/theme_pattern.svg";
import myWork_Data from "../../assets/mywork_data";
import "./Projects.css";

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="project-container">
        {myWork_Data.map((work, index) => {
          return (
            <div className="project-card" key={index}>
              <img
                className="project-image"
                src={work.w_img}
                alt={work.w_name}
              />

              <div className="project-content">
                <h2>{work.w_name}</h2>
                <p>{work.w_desc}</p>

                <div className="project-links">
                  <a href={work.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>

                  {work.live && (
                    <a href={work.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
