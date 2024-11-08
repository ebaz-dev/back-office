import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "@/lib/reducers/roleReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      role: roleReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
