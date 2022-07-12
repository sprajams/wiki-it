import { useState } from "react";
import Random from "./components/Random";
import Search from "./components/Search";
import ArticleLink from "./components/ArticleLink";
import styles from "./styles.module.scss";

function App() {
  const [articlehArr, setArticleArr] = useState([]);

  return (
    <div className={styles.app}>
      <div className={styles.searchBar}>
        <Search setArticleArr={setArticleArr} />
        <Random />
      </div>
      <ul className={styles.resultsContainer}>
        {articlehArr.length > 0
          ? articlehArr.map((x, i) => {
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

export default App;
