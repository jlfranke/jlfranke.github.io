import OtherSkills from "./OtherSkills";
import TechincalSkills from "./TechincalSkills";

function Skills() {
  return (
    <div className="grid gap-10 m-5">
      <TechincalSkills />
      <OtherSkills />
    </div>
  );
}

export default Skills;
