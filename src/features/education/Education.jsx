import ProfessionalDevelopment from "./ProfessionalDevelopment";
import University from "./University";

function Education() {
  return (
    <div className="grid gap-10 m-5">
      <University />
      <ProfessionalDevelopment />
    </div>
  );
}

export default Education;
