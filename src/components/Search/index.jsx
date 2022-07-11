import { useState, useEffect } from "react";
import ArticleLink from "../ArticleLink";
function Search() {
  const [searchArr, setSearchArr] = useState([]);
  const onClick = () => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=fish&summary&explaintext&utf8=&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchArr(data.query.search);
      });
  };
  useEffect(() => console.log(searchArr, "response"), [searchArr]);

  return (
    <div>
      <button onClick={onClick}>search</button>
      {searchArr.length > 0
        ? searchArr.map((x, i) => {
            return (
              <div key={i}>
                <ArticleLink article={x} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Search;
