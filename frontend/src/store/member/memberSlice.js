import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memberServices from "./memberService";

const member = JSON.parse(localStorage.getItem("member"));

const initialState = {
  members: [],
  member: member ? member : null,
  isError: false,
  isSuccess: false,
  isSuccessExcel: false,
  isErrorExcel: false,
  isLoading: false,
  message: "",
};

// Register member
export const register = createAsyncThunk(
  "member/register",
  async (memberData, thunkAPI) => {
    try {
      console.log("the req got here.,", memberData);
      return await memberServices.register(memberData);
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

// Register member from excel file
export const registerExcel = createAsyncThunk(
  "member/registerExcel",
  async (memberData, thunkAPI) => {
    try {
      console.log("the req got here.,", memberData);
      return await memberServices.register(memberData);
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

// login
export const login = createAsyncThunk(
  "member/login",
  async (memberData, thunkAPI) => {
    try {
      return await memberServices.login(memberData);
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

export const updateMember = createAsyncThunk(
  "member/updateMember",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().member.member.token;
      return await memberServices.updateMember(data, token);
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

export const getAllMembers = createAsyncThunk(
  "member/getAllMembers",
  async (_, thunkAPI) => {
    try {
      return await memberServices.getAllMembers();
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
export const getAllMembersOfChurch = createAsyncThunk(
  "member/getAllMembersOfChurch",
  async (churchName, thunkAPI) => {
    try {
      return await memberServices.getAllMembersOfChurch(churchName);
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

export const logout = createAsyncThunk("member/logout", async () => {
  await memberServices.logout();
});

export const memberSlice = createSlice({
  name: "member",
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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.member = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.member = null;
      }) //register excel
      .addCase(registerExcel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerExcel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessExcel = true;
        // state.member = action.payload;
      })
      .addCase(registerExcel.rejected, (state, action) => {
        state.isLoading = false;
        state.isErrorExcel = true;
        state.messageExcel = action.payload;
        state.member = null;
      })
      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.member = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.member = null;
      })
      // update school
      .addCase(updateMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateMember.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.member = null;
      })
      .addCase(getAllMembersOfChurch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllMembersOfChurch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload;
      })
      .addCase(getAllMembersOfChurch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // getAllMembers
      .addCase(getAllMembers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.members = action.payload;
        state.isSuccess = true;
      })
      .addCase(getAllMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = memberSlice.actions;
export default memberSlice.reducer;
