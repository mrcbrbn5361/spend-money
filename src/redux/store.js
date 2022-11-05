import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slices/ItemSlice';

export default configureStore({
  reducer: {
    item: itemReducer,
  },
});
