import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface IRoleState {
  permissions: Record<string, string[]>;
  role: string | null;
}

const initialState: IRoleState = {
  permissions: {},
  role: null,
};

export const fetchRoleData = createAsyncThunk(
  "role/fetchRoleData",
  async () => {
    // TODO: fetch role data using userId

    const data: IRoleState = {
      role: "BACKOFFICE_ADMIN",
      permissions: {
        dashboard: ["list", "create", "update", "delete", "show"],
        merchant: ["list", "create", "update", "delete", "show"],
        product: ["list", "create", "update", "delete", "show"],
        order: ["list", "create", "update", "delete", "show"],
      },
    };

    return data;
  }
);

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    initializeRole: (state, action: PayloadAction<IRoleState>) => {
      state.permissions = action.payload.permissions;
      state.role = action.payload.role;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoleData.fulfilled, (state, action) => {
      state.permissions = action.payload.permissions;
      state.role = action.payload.role;
    });
  },
});

export const { initializeRole } = roleSlice.actions;
export default roleSlice.reducer;
