import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoriesId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoriesId(state, action) {
      state.categoriesId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    }
  }
})

export const {setCategoriesId, setSort} = filterSlice.actions

export default filterSlice.reducer