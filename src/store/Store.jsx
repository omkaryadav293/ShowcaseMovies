import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./reducers/movieSlice"
import tvReducer from "./reducers/tvSlice"
import personReducer from "./reducers/peopleSlice"

export default configureStore({
  reducer: {
    movie:movieReducer,
    tv : tvReducer,
    person:personReducer
  }
})