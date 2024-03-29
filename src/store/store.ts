import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/slice';
import filter from './filter/slice';
import pizza from './pizzas/slice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
