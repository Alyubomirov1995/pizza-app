import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PERSISTENT_STATE } from './user.slice';
import { saveState } from './storage';
import CartSlice, { CART_PERSISTENT_STATE } from './Cart.slice';



export const store = configureStore({
	reducer: {
		user: userSlice,
		Cart: CartSlice
	}
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
	saveState(store.getState().Cart, CART_PERSISTENT_STATE);

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
