import { useState } from "react";
import SearchBar from "../components/search/SearchBar"
import SearchResults from "../components/search/SearchResults";
import { searchDrug } from "../api/durApi";

const SearchPage = () => {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState([]);

	const handleSearch = async () => {
		if (!keyword) return;

		const data = await searchDrug(keyword);
		console.log("검색 결과:", data);
		setResults(data);
	};

	const handleSelectDrug = (drug) => {
		console.log("선택된 약:", drug);
	};

	return (
		<div>
			<h1>약 검색</h1>
			<SearchBar
				keyword={keyword}
				setKeyword={setKeyword}
				onSearch={handleSearch}
			/>

			<SearchResults
				results={results}
				onSelect={handleSelectDrug}
			/>
		</div>
	)
}

export default SearchPage;