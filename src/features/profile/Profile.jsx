import ProfilePicture from "../../ui/ProfilePicture";
import ContactInfo from "./ContactInfo";
import Hobbies from "./Hobbies";
import Introduction from "./Introduction";

function Profile() {
  return (
    <div className="m-5">
      <div className="flex items-start gap-7.5">
        <ProfilePicture area="profile" />
        <div>
          <p className="text-pink-600 text-4xl mb-1.5 font-bold">
            Jessica Lynn Franke
          </p>
          <p className="text-2xl">Full Stack Software Engineer</p>
          <Introduction />
        </div>
        <ContactInfo />
      </div>
      <div>
        <Hobbies />
      </div>
    </div>
  );
}

export default Profile;
