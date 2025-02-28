import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "a66e334"; // Using the provided API key (use cautiously to avoid rate limits)

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movie data from OMDB API
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error("Error fetching movie data:", e);
    }
  };

  // UseEffect to fetch a default movie ("Clueless") on initial render
  useEffect(() => {
    getMovie("Clueless");
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}