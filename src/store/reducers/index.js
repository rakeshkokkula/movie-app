import { createSlice } from "@reduxjs/toolkit"
import { loadState, saveState, clearState } from "../../services/localStorage"

const initialState = loadState()

export const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search_text = action.payload
      saveState(state)
    },
    updateRating: (state, action) => {
      state.rating = action.payload
      saveState(state)
    },
    updateCategory: (state, action) => {
      state.category = action.payload
      saveState(state)
    },
    updateYear: (state, action) => {
      state.year = action.payload
      saveState(state)
    },
    clearFilter: (state) => {
      state.search_text = ""
      state.rating = ""
      state.category = ""
      state.year = ""
      clearState()
    },
  },
})

export const {
  updateSearch,
  updateRating,
  updateCategory,
  updateYear,
  clearFilter,
} = movieSearchSlice.actions

export default movieSearchSlice.reducer
