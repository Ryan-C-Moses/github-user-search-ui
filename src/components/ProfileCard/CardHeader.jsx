import clsx from "clsx";
import styles from "./ProfileCard.module.css";
import profilePic from "@assets/profile-icon.svg";

const CardHeader = () => {
  return (
    <div className={styles["card-header-container"]}>
      <img className={styles['profile-img']} src={profilePic} alt='profile pic' />
      <div className={styles.info}>
        <h2 className={clsx('txt-preset-1',styles.username)}>The Octocat</h2>
        <p className={clsx('txt-preset-4', styles["user-tag"])}>@octocat</p>
        <p className={clsx('txt-preset-6', styles["date-joined"])}>Joined 25 Jan 2011</p>
      </div>
    </div>
  );
};

export default CardHeader;
