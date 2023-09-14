import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import departmentServices from "./departmentServices";

const initialState = {
  department: {},
  departments: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// registerNewDepartment
export const registerNewDepartment = createAsyncThunk(
  "department/registerNewDepartment",
  async (departmentData, thunkAPI) => {
    try {
      return await departmentServices.registerDepartment(departmentData);
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

// updateDepartment
export const updateDepartment = createAsyncThunk(
  "department/updateDepartment",
  async (departmentData, thunkAPI) => {
    try {
      return await departmentServices.updateDepartment(departmentData);
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

// deleteDepartment
export const deleteDepartment = createAsyncThunk(
  "department/deleteDepartment",
  async (id, thunkAPI) => {
    try {
      return await departmentServices.deleteDepartment(id);
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

// getOneDepartment
export const getOneDepartment = createAsyncThunk(
  "department/getOneDepartment",
  async (id, thunkAPI) => {
    try {
      return await departmentServices.getOneDepartment(id);
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
// getAllDepartments
export const getAllDepartment = createAsyncThunk(
  "department/getAllDepartment",
  async (_, thunkAPI) => {
    try {
      return await departmentServices.getDepartments();
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

export const departmentSlice = createSlice({
  name: "department",
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
      //register
      .addCase(registerNewDepartment.pending, (state) => {})
      .addCase(registerNewDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.department = action.payload;
      })
      .addCase(registerNewDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //update
      .addCase(updateDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.department = action.payload;
      })
      .addCase(updateDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //delete
      .addCase(deleteDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //get
      .addCase(getAllDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.departments = action.payload;
      })
      .addCase(getAllDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //getOne
      .addCase(getOneDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.department = action.payload;
      })
      .addCase(getOneDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = departmentSlice.actions;
export default departmentSlice.reducer;
