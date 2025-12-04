import styles from "./ProfileCard.module.css";
import locationIcon from "@assets/location-icon.svg";
import twitterLogo from "@assets/twitter-icon.svg";
import blogLogo from "@assets/blog-icon.svg";
import companyIcon from "@assets/company-icon.svg";

const CardFooter = () => {
  return (
    <div className={styles["card-footer-container"]}>
      <div>
        <img src={locationIcon} alt='location icon' />
        <p className="txt-preset-6">San Francisco</p>
      </div>
      <div>
        <img src={twitterLogo} alt='twitter logo' />
        <p className="txt-preset-6">Not Available</p>
      </div>
      <div>
        <img src={blogLogo} alt='blog logo' />
        <p className="txt-preset-6">https://github.blog</p>
      </div>
      <div>
        <img src={companyIcon} alt='company icon' />
        <p className="txt-preset-6">@github</p>
      </div>
    </div>
  );
};

export default CardFooter;
