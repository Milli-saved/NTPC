import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accessServices from "./accessService";

const initialState = {
  access: {},
  message: "",
  isSuccess: false,
  isError: false,
  isLoading: false,
};

// register new access
export const registerNewAccess = createAsyncThunk(
  "access/registerNewaccess",
  async (accessData, thunkAPI) => {
    try {
      return await accessServices.registerAccess(accessData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update access
export const updateAccess = createAsyncThunk(
  "access/updateAccess",
  async (accessData, thunkAPI) => {
    try {
      return await accessServices.updateAccess(accessData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete access
export const deleteAccess = createAsyncThunk(
  "access/deleteAccess",
  async (id, thunkAPI) => {
    try {
      return await accessServices.deleteAccess(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get One Specific access
export const getOneAccess = createAsyncThunk(
  "access/getOneAccess",
  async (id, thunkAPI) => {
    try {
      return await accessServices.getOneAccess(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.access = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerNewAccess.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.access = {};
      })
      .addCase(registerNewAccess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.access = action.payload;
      })
      .addCase(registerNewAccess.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateAccess.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.access = {};
      })
      .addCase(updateAccess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.access = action.payload;
      })
      .addCase(updateAccess.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAccess.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.access = {};
      })
      .addCase(deleteAccess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.access = action.payload;
      })
      .addCase(deleteAccess.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getOneAccess.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.access = {};
      })
      .addCase(getOneAccess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.access = action.payload;
      })
      .addCase(getOneAccess.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = accessSlice.actions;
export default accessSlice.reducer;
