import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './Filter.css'

function Filter({ onRatingChange }) {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
    onRatingChange(rate)
  }

  return (
    <section className="filter-section">
      <div className="filter-container">
        <span className="filter-label">Filtrar por rating</span>
        <div className="filter-rating-group">
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={30}
            transition  
          />
          <span className="filter-more">& Más</span>
        </div>
      </div>
    </section>
  )
}

export default Filter