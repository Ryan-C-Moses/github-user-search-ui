import clsx from "clsx";
import styles from "./ProfileCard.module.css";

const CardBody = () => {
  return (
    <div className={styles["card-body-container"]}>
      <p className={clsx("txt-preset-6", styles.bio)}>This profile has no bio</p>
      <div className={styles["profile-info"]}>
        <div>
          <h6 className='txt-preset-7'>Repos</h6>
          <p className='txt-preset-2'>8</p>
        </div>
        <div>
          <h6 className='txt-preset-7'>Followers</h6>
          <p className='txt-preset-2'>3938</p>
        </div>
        <div>
          <h6 className='txt-preset-7'>Following</h6>
          <p className='txt-preset-2'>9</p>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
