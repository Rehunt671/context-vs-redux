import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state
interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state:CounterState) => {
      state.count += 1;
    },
    decrement: (state:CounterState) => {
      state.count -= 1;
    },
    setCount: (state:CounterState, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, setCount } = counterSlice.actions;

// Create store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export store type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;