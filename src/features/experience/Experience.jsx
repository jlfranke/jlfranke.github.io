import DataLogic from "./DataLogic";
import HomePik from "./HomePik";

function Experience() {
  return (
    <div className="m-5">
      <h1 className="text-pink-600 font-bold text-3xl mb-2.5">
        Work Experience
      </h1>
      <div className="grid gap-10">
        <DataLogic />
        <HomePik />
      </div>
    </div>
  );
}

export default Experience;
