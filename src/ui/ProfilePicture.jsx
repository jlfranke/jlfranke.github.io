import image from "../assets/profile.png";

function ProfilePicture({ area }) {
  const styles = {
    welcome: "h-96 m-auto mb-5 mt-[3%] rounded-full",
    profile: "h-70 mb-5 rounded-full",
  };
  return <img src={image} alt="Profile Picture" className={styles[area]} />;
}

export default ProfilePicture;
