const Search = () => {
	return (
		<div className="search">
			<i
				style={{
					position: "absolute",
					top: "12px",
					left: "15px",
					fontSize: "20px",
					zIndex: "1000",
				}}
				className="fas fa-search "></i>

			<input type="search" placeholder="Search..." className="searchInput" />
		</div>
	);
};

export default Search;
