export const searchFilter = ({ data, movies }) => {
  try {
    const isClear = isClearAvailable(data)
    if (!isClear) {
      const tmpData = [...movies]
      tmpData.sort((a, b) => {
        return b.vote_average - a.vote_average
      })
      const moviesNoFilter = tmpData.slice(0, 8)
      return moviesNoFilter
    }
    const tmpData = [...movies]
    const search = data.search_text
      ? tmpData.filter((i) => {
          return i?.title
            ?.toLowerCase()
            ?.includes(data?.search_text?.toLowerCase())
        })
      : tmpData
    const category = data.category
      ? search.filter((i) => {
          return i?.genre_ids?.includes(+data?.category)
        })
      : search
    let rating = category
    if (data.rating) {
      rating.sort((a, b) => {
        return data.rating == 1
          ? b.vote_average - a.vote_average
          : a.vote_average - b.vote_average
      })
    }
    const year = data.year
      ? rating.filter((i) => {
          return i?.release_date?.slice(0, 4) === data?.year?.toString()
        })
      : rating

    return year || []
  } catch (error) {
    return []
  }
}

export const isClearAvailable = (data) =>
  data?.search_text || data?.rating || data?.category || data?.year
