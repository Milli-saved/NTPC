import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import churchBranchServices from "./churchBranchServices";

const initialState = {
  churchBranch: {},
  churchBranchs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// register new church
export const registerNewChurchBranch = createAsyncThunk(
  "churchBranch/registerNewChurchBranch",
  async (churchData, thunkAPI) => {
    try {
      return await churchBranchServices.registerChurchBranch(churchData);
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
export const updateChurchBranch = createAsyncThunk(
  "churchBranch/updateChurchBranch",
  async (churchData, thunkAPI) => {
    try {
      return await churchBranchServices.updateChurchBranch(churchData);
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
export const deleteChurchBranch = createAsyncThunk(
  "churchBranch/deleteChurchBranch",
  async (id, thunkAPI) => {
    try {
      return await churchBranchServices.deleteChurchBranch(id);
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
export const getChruchBranch = createAsyncThunk(
  "churchBranch/getChruchBranch",
  async (_, thunkAPI) => {
    try {
      return await churchBranchServices.getChurchBranchs();
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
export const getOneChurchBranch = createAsyncThunk(
  "churchBranch/getOneChurchBranch",
  async (id, thunkAPI) => {
    try {
      return await churchBranchServices.getOneChurchBranch(id);
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

export const churchBranchSlice = createSlice({
  name: "churchBranch",
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
      // registerNewBranch
      .addCase(registerNewChurchBranch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerNewChurchBranch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.churchBranch = action.payload;
      })
      .addCase(registerNewChurchBranch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // updateBranch
      .addCase(updateChurchBranch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateChurchBranch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.churchBranch = action.payload;
      })
      .addCase(updateChurchBranch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //deleteBranch
      .addCase(deleteChurchBranch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChurchBranch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteChurchBranch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //getAllBranchs
      .addCase(getChruchBranch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChruchBranch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.churchBranchs = action.payload;
      })
      .addCase(getChruchBranch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //getOneBranch
      .addCase(getOneChurchBranch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneChurchBranch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.churchBranchs = action.payload;
      })
      .addCase(getOneChurchBranch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = churchBranchSlice.actions;
export default churchBranchSlice.reducer;
