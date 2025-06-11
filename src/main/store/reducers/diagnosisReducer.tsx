import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiagnosisChatProps {
  sender?: string;
  message?: string;
  timeStamp?: string;
}

export interface UserDiagnosisProps {
  diagnosisChat?: { messages: DiagnosisChatProps[] } | null;

  chatBot?: { messages: DiagnosisChatProps[] } | null;
}

const initialState: UserDiagnosisProps = {
  diagnosisChat: null,
  chatBot: null,
};

const userDiagnosisSlice = createSlice({
  name: "diagnosis",
  initialState,
  reducers: {
    cacheDiagnosis(state, action: PayloadAction<UserDiagnosisProps>) {
      state.diagnosisChat =
        action.payload.diagnosisChat ?? state.diagnosisChat!!;
      state.chatBot = action.payload.chatBot ?? state.chatBot!!;
    },
  },
});

export const { cacheDiagnosis } = userDiagnosisSlice.actions;

export default userDiagnosisSlice.reducer;
