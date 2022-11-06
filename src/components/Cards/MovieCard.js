import React from "react"
import Image from "next/image"
import Link from "next/link"

const MovieCard = ({ data }) => {
  return (
    <Link href={`movie/${data.id}`}>
      <div className="cursor-pointer relative m-2">
        <Image
          //   src={`https://images.unsplash.com/photo-1667566286356-48462d0123b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="movie"
          width={300}
          height={100}
          className="rounded-md z-0"
        />
        <div className="px-6 py-2 absolute rounded-md bottom-0 left-0 right-0 bg-teal-500 ">
          <div className="text-xl mb-1 font-bold">{data?.title}</div>
          <p className="text-gray-700 text-base mb-1">
            <span className="font-bold">Release Date:</span>{" "}
            {data?.release_date}
          </p>
          <p className="text-gray-700 text-base mb-1">
            <span className="font-bold">Rating:</span> {data?.vote_average}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
