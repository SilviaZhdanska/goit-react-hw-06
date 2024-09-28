import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експорт редюсера
export const filtersReducer = filtersSlice.reducer;

// Експорт екшенів
export const { changeFilter } = filtersSlice.actions;

// Експорт селектора
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice;
