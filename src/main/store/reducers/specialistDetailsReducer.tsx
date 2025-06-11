import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SpecialistDetailsProps {
  specialists:
    | [
        {
          name?: string;
          image?: string;
          backgroundImage?: string;
          bodyText?: string;
        },
      ]
    | null;
}

const initialState: SpecialistDetailsProps = {
  specialists: null,
};

const specialistDetailsSlice = createSlice({
  name: "specialistDetails",
  initialState,
  reducers: {
    cacheSpecialistDetails(
      state,
      action: PayloadAction<SpecialistDetailsProps>,
    ) {
      state.specialists = action.payload.specialists ?? state.specialists;
    },
  },
});

export const { cacheSpecialistDetails } = specialistDetailsSlice.actions;

export default specialistDetailsSlice.reducer;
