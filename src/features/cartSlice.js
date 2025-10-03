import { createSlice } from "@reduxjs/toolkit";
 
const initialState={
    items:[],
}
const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload);
            localStorage.setItem("cartItems",JSON.stringify(state.items));
        }
    }
})
export const{addToCart} =cartSlice.actions;
export default cartSlice.reducer