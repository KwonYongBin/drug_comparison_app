const SearchResults = ({ results, onSelect }) => {

  return (
    <section id="search_results">
      <h2>Search Results</h2>
      <ul>
        {results?.map((drug, index) => {
          return (
            <li
              key={index}
              onClick={() => onSelect(drug)}
            >
              <img src={drug.ITEM_IMAGE} width="60" />
              <p>{drug.ITEM_NAME}</p>
              <p>{drug.ENTP_NAME}</p>
            </li>
          )
        })}
      </ul>
      <button className="more_button">결과 더 보기</button>
    </section>
  )
}

export default SearchResults;