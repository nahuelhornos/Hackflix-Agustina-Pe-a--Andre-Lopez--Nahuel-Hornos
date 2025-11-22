import './Modal.css'

function Modal({ movie, onClose }) {
  if (!movie) return null

  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-poster">
            <img src={posterUrl} alt={movie.title} />
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{movie.title}</h2>
            <p className="modal-description">{movie.overview}</p>
            <div className="modal-details">
              <p className="modal-rating">Rating: {movie.vote_average}/10</p>
              {movie.release_date && (
                <p className="modal-date">Fecha de estreno: {movie.release_date}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

