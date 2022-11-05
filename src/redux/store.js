import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slices/MainSlice';

export default configureStore({
  reducer: {
    item: itemReducer,
  },
});
