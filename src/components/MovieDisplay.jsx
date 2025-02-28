export default function MovieDisplay({ movie }) {
    // Function to render loaded movie data
    const loaded = () => {
      return (
        <div className="movie-display">
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>Release Year: {movie.Year}</h2>
        </div>
      );
    };
  
    // Function to render loading state
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    // Use ternary operator to decide what to render
    return movie && movie.Title ? loaded() : loading();
  }