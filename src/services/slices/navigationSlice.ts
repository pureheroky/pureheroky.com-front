import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  currentPage: number;
}

const initialState: PageState = {
  currentPage: 0,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
