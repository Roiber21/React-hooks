import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
    return (
        <div className="Search">
        <input ref={searchInput} placeholder='Search characters...' className='search_input' type="text" value={search} onChange={handleSearch} />
    </div>
    );
}

export default Search;