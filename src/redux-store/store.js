import { configureStore } from "@reduxjs/toolkit";

import mealSlice from "./boards/mealSlice";

const store = configureStore({
  reducer: {
    meals: mealSlice,
   
  
    // passwordReset: forgetPasswordReducer,
  },
});

export default store;

