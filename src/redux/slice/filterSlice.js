import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoriesID: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('action setCategoryID', action)
      state.categoriesID = action.payload;
    }
  }
})

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;