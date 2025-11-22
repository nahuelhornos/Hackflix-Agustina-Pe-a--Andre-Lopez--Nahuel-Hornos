import './MovieCard.css'

function MovieCard({ movie, onClick }) {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image'

  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">Rating: {movie.vote_average}/10</p>
      </div>
    </div>
  )
}

export default MovieCard