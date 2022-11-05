import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'item',
  initialState: {
    money: 100_000_000_000,
    items: [],
    info: {},
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setInfo: (state, action) => {
      let newObj = action.payload;
      let info = state.info;
      state.info = {
        ...info,
        ...newObj,
      };
    },
  },
});

export const { setItems, setInfo } = mainSlice.actions;
export default mainSlice.reducer;
