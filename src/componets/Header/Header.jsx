import styles from './Header.module.css'




const Header = (props) => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>{props.title} Limgrave Palace</h1>
    </header>
  );
};

export default Header;
