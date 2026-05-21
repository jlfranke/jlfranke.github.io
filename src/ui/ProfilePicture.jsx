import image from "../assets/profile.jpg";

function ProfilePicture({ area }) {
  const styles = {
    welcome: "h-96 m-auto mb-5 mt-[3%]",
    profile: "h-70 mb-5",
  };
  return <img src={image} alt="Profile Picture" className={styles[area]} />;
}

export default ProfilePicture;
