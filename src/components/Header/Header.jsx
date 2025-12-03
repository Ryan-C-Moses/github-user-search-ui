import clsx from "clsx";
import styles from "./Header.module.css";
import moon from '@assets/moon-icon.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={clsx("txt-preset-1", styles["page-title"])}>devfinder</h1>
      <div>
        <p className="txt-preset-8">dark</p>
        <img className={styles['moon-icon']} src={moon} alt='half moon' />
      </div>
    </div>
  );
};

export default Header;
