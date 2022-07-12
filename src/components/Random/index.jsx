import styles from "./styles.module.scss";

function Random() {
  // open up a random wiki article in a new page
  const onClick = () => {
    window.open(
      `https://en.wikipedia.org/wiki/Special:Random`,
      `_blank`,
      `noopener,noreferrer`
    );
  };
  return (
    <div className={styles.wrap}>
      <button onClick={onClick} className={styles.btnRandom}>
        RANDOM
      </button>
    </div>
  );
}

export default Random;
