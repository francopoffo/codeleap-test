import { createSlice, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

const initialState = { counter: 0, user: "" };

export const updateSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    add(state) {
      state.counter++;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const updateAction = updateSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    counter: updateSlice.reducer,
  },
});
