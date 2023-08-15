import React, { useState, useEffect } from "react"
import MovieCard from "./MovieCard"
import "./App.css"
import searchicon from "./search.svg"

const API_URL = "https://www.omdbapi.com/?apikey=35f704b1"

const App = () => {
  const [movies, MovieSet] = useState([])
  const [searchterm, setSearch] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    MovieSet(data.Search)
  }

  useEffect(() => {
    searchMovies("batman")
  }, [])

  return (
    <div className="app">
      <h1>Movie-HUB</h1>
      <div className="search">
        <input
          placeholder="Enter Movie Name"
          value={searchterm}
          onChange={(e) => setSearch(e.target.value)}
        />

        <img
          src={searchicon}
          alt="Search Icon"
          onClick={() => searchMovies(searchterm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard mdata={movie} />
          ))}
          {/* <MovieCard mdata={movies[0]} /> */}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  )
}

export default App
