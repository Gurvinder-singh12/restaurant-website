import { createSlice } from "@reduxjs/toolkit";
 
const initialState={
    items:[],
}
const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const dish = action.payload;
            const existingItem=state.items.find((items)=>items.id===dish.id);
            if(existingItem){
                existingItem.quantity +=1;    // only quantity increase if item already in cart
            }else{
                
                state.items.push({...dish, quantity:1});
                localStorage.setItem("cartItems",JSON.stringify(state.items));
            }
        }
    }
})
export const{addToCart} =cartSlice.actions;
export default cartSlice.reducer