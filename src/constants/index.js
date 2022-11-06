export const categories = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 53,
    name: "Thriller",
  },
]

export const ratings = [
  {
    id: 1,
    name: "Top rated",
  },
  {
    id: 2,
    name: "Low Rated",
  },
]

export const years = Array(12)
  .fill(null)
  .map((i, index) => {
    const temp = 2011
    return {
      id: temp + index,
      name: temp + index,
    }
  })
