function ArticleLink({ article }) {
  return (
    <a
      href={`https://en.wikipedia.org/?curid=${article.pageid}`}
      target="_blank"
      rel="noreferrer"
    >
      <div> {article.title} </div>
      <div dangerouslySetInnerHTML={{ __html: article.snippet }} />
    </a>
  );
}

export default ArticleLink;
