import { Link } from "react-router-dom";

import ProfilePicture from "./ProfilePicture";

function Welcome() {
  return (
    <div className="h-dvh text-center m-5">
      <ProfilePicture area="welcome" />
      <h1 className="text-6xl mb-5">Jessica Franke</h1>
      <Link
        to="/profile"
        className="text-3xl text-pink-400 hover:text-pink-600"
      >
        Meet Me &rarr;
      </Link>
    </div>
  );
}

export default Welcome;
