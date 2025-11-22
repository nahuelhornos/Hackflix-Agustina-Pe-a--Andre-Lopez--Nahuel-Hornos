import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Filter from './components/Filter'
import MovieGrid from './components/MovieGrid'
import Modal from './components/Modal'
import MatrixBackground from './components/MatrixBackground'


import moviesData from './movies.json' 

function App() {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
  setMovies(moviesData)
  setFilteredMovies(moviesData)
  }, [])

  
  const handleRatingChange = (stars) => {
    setSelectedRating(stars)
    
    if (stars === 0) {
      setFilteredMovies(movies)
      return
    }

    let filtered = []
    
    if (stars === 5) {
      filtered = movies.filter(movie => {
        return movie.vote_average >= 8
      })
    } else {
      const exactRating = stars * 2
      filtered = movies.filter(movie => {
        const movieRating = Math.round(movie.vote_average)
        return movieRating === exactRating
      })
    }
    
    setFilteredMovies(filtered)
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }

  const handleCloseModal = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="app">
      <MatrixBackground />
      <Header />
      <Hero />
      <Filter onRatingChange={handleRatingChange} />
      <MovieGrid movies={filteredMovies} onMovieClick={handleMovieClick} />
      <Modal movie={selectedMovie} onClose={handleCloseModal} />
    </div>
  )
}

export default App