import {configureStore} from "@reduxjs/toolkit"
import cart from "../slices/cart"

 const store = configureStore({
    reducer: cart
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
