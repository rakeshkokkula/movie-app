import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers"

// creating store
export const store = configureStore({
  reducer: rootReducer,
})
// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
