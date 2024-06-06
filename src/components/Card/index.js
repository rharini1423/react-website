import styles from './styles.module.css';

function Card() {
  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Docs <span>-&gt;</span>
      </h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>
  );
}

export default Card;
