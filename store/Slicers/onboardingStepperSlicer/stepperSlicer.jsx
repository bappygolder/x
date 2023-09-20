// In a file named formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const stepperSlice = createSlice({
  name: 'stepperSlicer',
  initialState: {
    currentStep: 3,
    totalSteps: 6
  },
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    handlePrevious: (state) => {
        state.currentStep -= 1;
      },
  
      handleNext: (state, action) => {
        state.currentStep = state.currentStep + 1;
      },
  },
});

export const { setCurrentStep, totalSteps, handleNext, handlePrevious } = stepperSlice.actions;
export default stepperSlice.reducer;
