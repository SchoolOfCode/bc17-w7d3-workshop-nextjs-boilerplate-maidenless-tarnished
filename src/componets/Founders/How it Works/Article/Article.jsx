import styles from './Article.module.css';

const Article = ({ imageSrc, altText, title, description }) => {
  return (
    <article className={styles.tile}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <img src={imageSrc} alt={altText} className={styles.tileImage} />
    </article>
  );
};

export default Article;
