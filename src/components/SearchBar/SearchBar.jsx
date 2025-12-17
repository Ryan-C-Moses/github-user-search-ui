import clsx from "clsx";
import styles from "./SearchBar.module.css";
import searchIcon from "@assets/search-icon.svg";

const SearchBar = () => {
  return (
    <div className={styles["search-bar-container"]}>
      <img className={styles["search-icon"]} src={searchIcon} alt='search icon' />
      <input
        id='username'
        name='username'
        className={clsx("txt-preset-3-mobile", styles["search-input"])}
        type='text'
        placeholder='Search GitHub username...'
        autoComplete='off'
      />
      <button className={clsx('txt-preset-5', styles['search-btn'])}>Search</button> 
    </div>
  );
};

export default SearchBar;
