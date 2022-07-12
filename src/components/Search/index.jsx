import { useState } from "react";
import styles from "./styles.module.scss";
function Search({ setArticleArr }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${searchValue}&summary&explaintext&utf8=&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          setArticleArr(data.query.search);
        });
    }
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form id="search" onSubmit={handleSubmit} className={styles.formWrap}>
        <input
          type="text"
          value={searchValue}
          onChange={onChange}
          required
          className={styles.formInput}
        ></input>
        <button type="submit" className={styles.buttonInput}>
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
