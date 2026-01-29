import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    language: "en",
    application:[],
  },
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    applicationData(state, action) {
      state.application = action.payload;
    }
  },
});

export const { setLanguage, applicationData } = settingSlice.actions;
export default settingSlice.reducer;