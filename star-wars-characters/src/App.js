// import React, { useState, useEffect } from 'react';
// import { fetchAllCharacters, fetchHomeworlds, fetchFilms, fetchSpecies } from './api';
// import Loader from './components/Loader';
// import CharacterCard from './components/CharacterCard';
// import CharacterModal from './components/CharacterModal';
// import SearchFilter from './components/SearchFilter';
// import Pagination from './components/Pagination';
// import NotFound from './components/NotFound';
// import './App.css';

// const App = () => {
//   const [characters, setCharacters] = useState([]);
//   const [filteredCharacters, setFilteredCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState({ homeworld: '', film: '', species: '' });
//   const [selectedCharacter, setSelectedCharacter] = useState(null);
//   const [homeworlds, setHomeworlds] = useState([]);
//   const [films, setFilms] = useState([]);
//   const [species, setSpecies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [charactersPerPage] = useState(10);

//   useEffect(() => {
//     const loadFilters = async () => {
//       try {
//         const [homeworldData, filmData, speciesData] = await Promise.all([
//           fetchHomeworlds(),
//           fetchFilms(),
//           fetchSpecies(),
//         ]);
//         setHomeworlds(homeworldData);
//         setFilms(filmData);
//         setSpecies(speciesData);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     loadFilters();
//   }, []);

//   useEffect(() => {
//     const loadCharacters = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchAllCharacters();
//         setCharacters(data);
//         setFilteredCharacters(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCharacters();
//   }, []);

//   useEffect(() => {
//     filterCharacters();
//   }, [searchTerm, filter]);

//   const filterCharacters = () => {
//     let filtered = characters;

//     if (searchTerm) {
//       filtered = filtered.filter((character) =>
//         character.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (filter.homeworld) {
//       filtered = filtered.filter((character) => character.homeworld === filter.homeworld);
//     }

//     if (filter.film) {
//       filtered = filtered.filter((character) => character.films.includes(filter.film));
//     }

//     if (filter.species) {
//       filtered = filtered.filter((character) => character.species.includes(filter.species));
//     }

//     setFilteredCharacters(filtered);
//     setCurrentPage(1); // Reset to first page after filtering
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const handleFilter = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleCardClick = (character) => {
//     setSelectedCharacter(character);
//   };

//   const handleCloseModal = () => {
//     setSelectedCharacter(null);
//   };

//   // Get current characters
//   const indexOfLastCharacter = currentPage * charactersPerPage;
//   const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
//   const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="App">
//       <h1>Star Wars Characters</h1>
//       <SearchFilter
//         onSearch={handleSearch}
//         onFilter={handleFilter}
//         homeworlds={homeworlds}
//         films={films}
//         species={species}
//       />
//       {loading ? <Loader /> : (
//         <>
//           {filteredCharacters.length === 0 ? (
//             <NotFound />
//           ) : (
//             <>
//               <div className="character-list">
//                 {currentCharacters.map((character) => (
//                   <CharacterCard key={character.name} character={character} onClick={handleCardClick} />
//                 ))}
//               </div>
//               <Pagination
//                 charactersPerPage={charactersPerPage}
//                 totalCharacters={filteredCharacters.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//               />
//             </>
//           )}
//         </>
//       )}
//       {error && <div className="error">{error}</div>}
//       {selectedCharacter && <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />}
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { fetchAllCharacters, fetchHomeworlds, fetchFilms, fetchSpecies } from './api';
import Loader from './components/Loader';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import SearchFilter from './components/SearchFilter';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ homeworld: '', film: '', species: '' });
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [homeworlds, setHomeworlds] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [homeworldData, filmData, speciesData] = await Promise.all([
          fetchHomeworlds(),
          fetchFilms(),
          fetchSpecies(),
        ]);
        setHomeworlds(homeworldData);
        setFilms(filmData);
        setSpecies(speciesData);
      } catch (err) {
        setError(err.message);
      }
    };

    loadFilters();
  }, []);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCharacters();
        setCharacters(data);
        setFilteredCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [searchTerm, filter]);

  const filterCharacters = () => {
    let filtered = characters;

    if (searchTerm) {
      filtered = filtered.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter.homeworld) {
      filtered = filtered.filter((character) => character.homeworld === filter.homeworld);
    }

    if (filter.film) {
      filtered = filtered.filter((character) => character.films.includes(filter.film));
    }

    if (filter.species) {
      filtered = filtered.filter((character) => character.species.includes(filter.species));
    }

    setFilteredCharacters(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  // Get current characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters</h1>
      </header>
      <SearchFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        homeworlds={homeworlds}
        films={films}
        species={species}
      />
      {loading ? <Loader /> : (
        <>
          {currentCharacters.length > 0 ? (
            <div className="character-list">
              {currentCharacters.map((character) => (
                <CharacterCard key={character.name} character={character} onClick={handleCardClick} />
              ))}
            </div>
          ) : (
            <div className="not-found">
              <div className="not-found-text">No characters found</div>
            </div>
          )}
          <Pagination
            charactersPerPage={charactersPerPage}
            totalCharacters={filteredCharacters.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
      {error && <div className="error">{error}</div>}
      {selectedCharacter && <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;

