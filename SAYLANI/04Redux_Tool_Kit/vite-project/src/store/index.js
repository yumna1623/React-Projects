import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth.slice.js';

const store = configureStore({
    reducer: {
      auth: authSlice,
    },
  });
  
  export default store;  // ✅ Default export // Change to default export