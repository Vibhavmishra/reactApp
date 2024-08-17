import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api';

export const fetchAllCharacters = async () => {
  try {
    let characters = [];
    let url = `${API_BASE_URL}/people/`;
    while (url) {
      const response = await axios.get(url);
      characters = [...characters, ...response.data.results];
      url = response.data.next;
    }
    return characters;
  } catch (error) {
    throw error;
  }
};

export const fetchCharacterDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchHomeworlds = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/planets/`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchFilms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films/`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchSpecies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/species/`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
