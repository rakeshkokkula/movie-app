import React from "react"
import { categories } from "../../constants"

const MovieContent = ({ movie }) => {
  return (
    <>
      <h2 class="font-bold text-4xl py-3">{movie.title}</h2>
      <p className="text-xl text-gray-500 py-1">
        <span className="font-bold ">Release Date :</span> {movie.release_date}
      </p>
      <h5 className="text-gray-500 text-xl py-1">
        ⭐{movie.vote_average}/10,
        <span className="mx-3">{movie.vote_count} ratings </span>
      </h5>
      <h6 className="pt-2 text-gray-500 text-xl font-bold">Overview:</h6>
      <p className="font-italic text-gray-500">{movie.overview}</p>
      <p className="text-xl py-2 text-gray-500">
        <span className="font-bold">Genre(s): </span>
        {movie.genre_ids
          .map((i) => {
            return categories.find((x) => x.id === i)?.name
          })
          .filter(Boolean)
          .join(", ")}
      </p>
    </>
  )
}

export default MovieContent
