import Tools from "./Tools";
import "./skills.css";
function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills__container container">
        <h1 className="skills__title">Skills</h1>
        <p className="skills__subtitle">Technologies in my daily work </p>
        <Tools />
      </div>
    </section>
  );
}

export default Skills;
