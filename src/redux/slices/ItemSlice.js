import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    money: 100000000000,
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

export const { setItems, setInfo } = itemSlice.actions;
export default itemSlice.reducer;
