import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import programServices from "./programServices";

const initialState = {
  program: {},
  programs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Register new Pro
export const registerNewPro = createAsyncThunk(
  "program/registerNewPro",
  async (programData, thunkAPI) => {
    try {
      return await programServices.registerProgram(programData);
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

// Update Pro
export const updatePro = createAsyncThunk(
  "program/updatePro",
  async (programData, thunkAPI) => {
    try {
      return await programServices.updateProgram(programData);
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

// Delete Pro
export const deletePro = createAsyncThunk(
  "program/deletePro",
  async (id, thunkAPI) => {
    try {
      return await programServices.deleteProgram(id);
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

// Get Pro
export const getPrograms = createAsyncThunk(
  "program/getPrograms",
  async (_, thunkAPI) => {
    try {
      return await programServices.getPrograms();
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

// Get One Specific Pro
export const getOneProgram = createAsyncThunk(
  "program/getOneProgram",
  async (id, thunkAPI) => {
    try {
      return await programServices.getOneProgram(id);
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

// Attended Members
export const Attendance = createAsyncThunk(
  "program/Attendance",
  async (data, thunkAPI) => {
    try {
      return await programServices.attendedMembers(data);
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

export const programSlice = createSlice({
  name: "program",
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
      //registerNewPro
      .addCase(registerNewPro.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerNewPro.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.program = action.payload;
      })
      .addCase(registerNewPro.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // update
      .addCase(updatePro.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePro.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.program = action.payload;
      })
      .addCase(updatePro.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // delete
      .addCase(deletePro.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePro.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deletePro.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // getOne
      .addCase(getOneProgram.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneProgram.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.program = action.payload;
      })
      .addCase(getOneProgram.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // getAll
      .addCase(getPrograms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPrograms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.programs = action.payload;
      })
      .addCase(getPrograms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = programSlice.actions;
export default programSlice.reducer;
