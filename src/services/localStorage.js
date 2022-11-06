export const initialState = {
  search_text: "",
  rating: "",
  category: "",
  year: "",
}

export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState")
    if (serialState === null) {
      return initialState
    }
    return JSON.parse(serialState)
  } catch (err) {
    return initialState
  }
}

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state)
    localStorage.setItem("appState", serialState)
  } catch (err) {
    console.log(err)
  }
}

export const clearState = (state) => {
  try {
    localStorage.removeItem("appState")
  } catch (err) {
    console.log(err)
  }
}
