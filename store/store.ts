import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useSelector ,TypedUseSelectorHook,} from 'react-redux'
import {cartSlice} from './features/cartSlice'


export const store = configureStore({
  reducer: {
    cart:cartSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const useAppDispatch:()=>AppDispatch=useDispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector