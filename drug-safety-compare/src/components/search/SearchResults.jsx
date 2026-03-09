const SearchResults = ({ results, onSelect }) => {
  if (!results.length) {
    return <p>검색 결과 없음</p>;
  }

  return (
    <ul>
      {results?.map((drug, index) => {
        return (
          <li key={index} onClick={() => onSelect(drug)}>
            {drug?.ITEM_NAME}
          </li>
        )
      })}
    </ul>
  )
}

export default SearchResults;