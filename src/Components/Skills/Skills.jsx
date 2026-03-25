import './Skills.css';
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
    return (
        <div id='skills' className="skills">
            <div className="skills-title">
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skills-container">
                <div className="skill">
                    <h1>Programing Skills</h1>
                    <ul>
                        <li>Java</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="skill">
                    <h1>Frameworks & Libraries</h1>
                    <ul>
                        <li>React.js</li>
                        <li>Spring Boot</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="skill">
                    <h1>DataBase</h1>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="skill">
                    <h1>Tools & Platforms</h1>
                    <ul>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>PostMan</li>
                        <li>Vercel</li>
                        <li>Render</li>
                    </ul>
                </div>
                <div className="skill">
                    <h1>Other Skills</h1>
                    <ul>
                        <li>Data Structures & Algorithms</li>
                        <li>Problem Solving</li>
                        <li>REST API Development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;