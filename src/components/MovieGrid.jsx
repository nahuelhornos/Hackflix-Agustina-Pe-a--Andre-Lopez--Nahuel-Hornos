import './MovieGrid.css'
import MovieCard from './MovieCard'

function MovieGrid({ movies, onMovieClick }) {
  if (movies.length === 0) {
    return (
      <div className="no-results">
        <p>Lo sentimos, no se encontraron películas con el rating solicitado.</p>
      </div>
    )
  }

  return (
    <section className="movie-grid-section">
      <div className="movie-grid-container">
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MovieGrid