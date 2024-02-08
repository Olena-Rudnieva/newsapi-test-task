// const filteredArticles = useMemo(() => {
//   const normalisedQuery = query.toLocaleLowerCase();

//   return userArticles.filter(
//     article =>
//       article.title.toLocaleLowerCase().includes(normalisedQuery) ||
//       article.description.toLocaleLowerCase().includes(normalisedQuery)
//   );
// }, [appliedQuery, userArticles]);

export const searchingArticles = (articles, query) => {
  const normalisedQuery = query.toLocaleLowerCase();
  const foundArticles = articles.filter(
    article =>
      article.title.toLocaleLowerCase().includes(normalisedQuery) ||
      article.description.toLocaleLowerCase().includes(normalisedQuery)
  );
  return foundArticles;
};
