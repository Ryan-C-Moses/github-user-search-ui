import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles["profile-card-container"]}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default ProfileCard;
