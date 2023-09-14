import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import churchServices from "./churchServices";

const initialState = {
  church: {},
  churchs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// register new church
export const registerNewChurch = createAsyncThunk(
  "church/registerNewChurch",
  async (churchData, thunkAPI) => {
    try {
      return await churchServices.registerChurch(churchData);
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

// update church
export const updateChurch = createAsyncThunk(
  "church/updateChurch",
  async (churchData, thunkAPI) => {
    try {
      return await churchServices.updateChurch(churchData);
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

// delete church
export const deleteChurch = createAsyncThunk(
  "church/deleteChurch",
  async (id, thunkAPI) => {
    try {
      return await churchServices.deleteChurch(id);
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

// getchurch
export const getChurch = createAsyncThunk(
  "church/getChurch",
  async (_, thunkAPI) => {
    try {
      return await churchServices.getChurch();
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

// Get One Specific church
export const getOneChurch = createAsyncThunk(
  "church/getOneChurch",
  async (id, thunkAPI) => {
    try {
      return await churchServices.getOneChurch(id);
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

export const churchSlice = createSlice({
  name: "church",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      //registerNewchurch
      .addCase(registerNewChurch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerNewChurch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.church = action.payload;
      })
      .addCase(registerNewChurch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // update
      .addCase(updateChurch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateChurch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.church = action.payload;
      })
      .addCase(updateChurch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // delete
      .addCase(deleteChurch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChurch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteChurch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get church
      .addCase(getChurch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChurch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.churchs = action.payload;
      })
      .addCase(getChurch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get one churhc
      .addCase(getOneChurch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneChurch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.church = action.payload;
      })
      .addCase(getOneChurch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = churchSlice.actions;
export default churchSlice.reducer;
