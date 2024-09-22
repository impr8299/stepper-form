
import { configureStore } from '@reduxjs/toolkit';
import stepFormReducer from "./Slice/stepformSlice";


export function makeStore() {
  return configureStore({
    reducer: {
      stepForm: stepFormReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();