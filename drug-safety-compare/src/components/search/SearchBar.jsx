import React from 'react'

const SearchBar = ({ keyword, setKeyword, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    onSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="약 이름 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button onClick={onSearch}>검색</button>
      </form>
    </div>
  )
}

export default SearchBar