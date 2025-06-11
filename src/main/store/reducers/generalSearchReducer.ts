import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralSearchReducerProps {
  query: string | null;
}

const initialState: GeneralSearchReducerProps = {
  query: null,
};

const generalSearchSlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    cacheSearchQuery(state, action: PayloadAction<GeneralSearchReducerProps>) {
      state.query = action.payload.query ?? state.query!!;
    },
  },
});

export const { cacheSearchQuery } = generalSearchSlice.actions;

export default generalSearchSlice.reducer;
