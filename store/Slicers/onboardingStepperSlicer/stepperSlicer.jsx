/* eslint-disable no-param-reassign */
// In a file named formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const stepperSlicer = createSlice({
  name: 'stepperSlicer',
  initialState: {
    currentStep: 1,
    totalSteps: 6,
  },
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    handlePrevious: (state) => {
      state.currentStep -= 1;
    },
    handleNext: (state) => {
      state.currentStep += 1;
    },
  },
});

export const {
  currentStep, totalSteps, handleNext, handlePrevious,
} = stepperSlicer.actions;
export default stepperSlicer.reducer;
