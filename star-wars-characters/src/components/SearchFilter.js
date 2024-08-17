import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter, homeworlds, films, species }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ homeworld: '', film: '', species: '' });

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilter = { ...filter, [name]: value };
    setFilter(updatedFilter);
    onFilter(updatedFilter);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <select name="homeworld" onChange={handleFilterChange}>
        <option value="">Filter by Homeworld</option>
        {homeworlds.map((homeworld) => (
          <option key={homeworld.name} value={homeworld.url}>{homeworld.name}</option>
        ))}
      </select>
      <select name="film" onChange={handleFilterChange}>
        <option value="">Filter by Film</option>
        {films.map((film) => (
          <option key={film.title} value={film.url}>{film.title}</option>
        ))}
      </select>
      <select name="species" onChange={handleFilterChange}>
        <option value="">Filter by Species</option>
        {species.map((speciesItem) => (
          <option key={speciesItem.name} value={speciesItem.url}>{speciesItem.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
