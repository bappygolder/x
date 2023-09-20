import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import stepperSlicer from "./Slicers/onboardingStepperSlicer/stepperSlicer";

export const store = configureStore({
  reducer: {
    stepperSlicer: stepperSlicer,
  },
});

export const RootState = store.getState; // Define RootState as a variable
export const AppDispatch = store.dispatch; // Define AppDispatch as a variable

setupListeners(store.dispatch);
