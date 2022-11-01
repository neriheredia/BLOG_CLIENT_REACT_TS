import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';
import { AppStore } from '@/models';

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});
