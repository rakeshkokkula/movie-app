import React from "react"
import Image from "next/image"
import data from "../../data"
import MovieContent from "../../components/MovieContent/MovieContent"
import MovieDetailButtons from "../../components/Buttons/MovieDetailButtons"

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-4">
        <div className="px-2 md:col-span-1 sm:col-span-1">
          <Image
            alt="movie"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            height={550}
            width={400}
            className="rounded-md"
          />
        </div>
        <div className="p-3 md:col-span-2 sm:col-span-1">
          <MovieContent movie={movie} />
          <div className="py-5">
            <MovieDetailButtons movie={movie} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails

export async function getStaticProps(context) {
  const { slug } = context.params
  const getMovie = data.find((i) => String(i.id) === slug)
  return {
    props: {
      movie: getMovie,
    },
  }
}

export async function getStaticPaths() {
  const paths = data.map((i) => ({
    params: { slug: String(i.id) },
  }))
  return {
    paths,
    fallback: false,
  }
}
