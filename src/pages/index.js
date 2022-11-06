import MovieCard from "../components/Cards/MovieCard"
import SearchFilter from "../components/Filters/SearchFilter"
import styles from "../styles/Home.module.css"
import data from "../data"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { searchFilter } from "../services/searchFilter"

export default function Home({ movies }) {
  const data = useSelector((state) => state)
  const [moviesData, setMoviesData] = useState([])

  useEffect(() => {
    const filteredMovies = searchFilter({ data, movies })
    setMoviesData(filteredMovies)
  }, [data, movies])

  return (
    <div className={styles.container}>
      <SearchFilter />
      <div className="flex flex-row flex-wrap justify-center">
        {moviesData.map((i) => {
          return <MovieCard key={i.id} data={i} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      movies: data,
    },
  }
}
