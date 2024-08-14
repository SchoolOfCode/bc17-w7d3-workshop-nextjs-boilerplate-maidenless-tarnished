import styles from './Header.module.css'
const Header = (props) => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>{props.title} Palace</h1>
    </header>
  );
};

export default Header;
