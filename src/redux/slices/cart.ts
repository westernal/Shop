import { createSlice } from "@reduxjs/toolkit";
import { CartSlice } from "../../types/Types";

const initialState: CartSlice = {
    numOfItems: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        added: state => {
            state.numOfItems++
        },
        removed: state => {
            state.numOfItems--
        },
        reset: state => {
            state.numOfItems = 0
        }
    }
})

export default cartSlice.reducer
export const {added, removed, reset} = cartSlice.actions