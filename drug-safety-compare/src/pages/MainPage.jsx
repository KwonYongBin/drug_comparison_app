import { useState } from "react";
import Header from "../components/header/Header"
import SearchBar from "../components/search/SearchBar"
import SearchResults from "../components/search/SearchResults";
import { searchDrug } from "../api/durApi";
import ComparResult from "../components/results/ComparResult";

const MainPage = () => {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState([]);
	const [selectedDrug, setSelectedDrug] = useState(null);

	const handleSearch = async () => {
		if (!keyword) return;

		const data = await searchDrug(keyword);
		console.log("검색 결과:", data);
		setResults(data);
	};

	const handleSelectDrug = (drug) => {
		console.log("선택된 약:", drug);
		setSelectedDrug(drug);
	};

	return (
		<main>
			{/* header section */}
			<Header />

			{/* search bar section */}
			<SearchBar
				keyword={keyword}
				setKeyword={setKeyword}
				onSearch={handleSearch}
			/>

			{/* search result section */}
			<SearchResults
				results={results}
				onSelect={handleSelectDrug}
			/>

			{/* Comparison result section */}
			<ComparResult
				drug={selectedDrug}
			/>
		</main>
	)
}

export default MainPage;