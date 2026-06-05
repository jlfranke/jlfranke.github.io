import WildOasisHotel from "./WildOasisHotel";
import WildOasisWebsite from "./WildOasisWebsite";
import Wordle from "./Wordle";

function Projects() {
  return (
    <div className="m-5">
      <h1 className="text-pink-600 font-bold text-3xl mb-2.5">
        Personal Projects
      </h1>
      <div className="grid gap-10">
        <WildOasisHotel />
        <WildOasisWebsite />
        <Wordle />
      </div>
    </div>
  );
}

export default Projects;
