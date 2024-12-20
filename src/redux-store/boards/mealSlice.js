import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMeals = createAsyncThunk(
  "meals/getMeals",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
console.log("respone>>>>", response);

      // const response = await axios.post("/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addMealData = createAsyncThunk(
  "meals/addMealData",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/auth/workspaces/${userData}/meals`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const mealSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
    addMeals:[],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(addMealData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addMealData.fulfilled, (state, action) => {
      state.loading = false;

      state.addMeals = action.payload;
    });
    builder.addCase(addMealData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // get meals here
    builder.addCase(getMeals.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMeals.fulfilled, (state, action) => {

      state.loading = false;

      state.meals = action.payload.recipes;
    });
    builder.addCase(getMeals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    
  },
});

export default mealSlice.reducer;
