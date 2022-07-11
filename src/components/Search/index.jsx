import { useState } from "react";
import ArticleLink from "../ArticleLink";
import styles from "./styles.module.scss";
function Search() {
  const [searchArr, setSearchArr] = useState([]);
  const onClick = () => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=fish&summary&explaintext&utf8=&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchArr(data.query.search);
      });
  };

  return (
    <div>
      <button onClick={onClick}>search</button>
      <ul className={styles.searchesContainer}>
        {searchArr.length > 0
          ? searchArr.map((x, i) => {
              return (
                <li key={i}>
                  <ArticleLink article={x} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default Search;
