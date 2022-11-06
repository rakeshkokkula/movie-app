import React from "react"
import YouTube from "react-youtube"
import data from "../../../data"
import { categories } from "../../../constants"
import MovieContent from "../../../components/MovieContent/MovieContent"

const MovieWatch = ({ movie }) => {
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  return (
    <div>
      <YouTube videoId={movie.video_url} opts={opts} />
      <div className="p-3">
        <MovieContent movie={movie} />
      </div>
    </div>
  )
}

export default MovieWatch

export async function getStaticProps(context) {
  //   console.log(context, "context")
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
