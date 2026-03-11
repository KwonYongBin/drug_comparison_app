import React from 'react'

const SearchBar = ({ keyword, setKeyword, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    onSearch();
  };

  return (
    <section id="search_bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="약 이름 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </form>
    </section>
  )
}

export default SearchBar