import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
 
const initialState={
   items: JSON.parse(localStorage.getItem("cartItems")) || [],
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
                toast.success("Added")
            }else{
                
                state.items.push({...dish, quantity:1});
                toast.success("Item Added")
                localStorage.setItem("cartItems",JSON.stringify(state.items));
            }
        },
        removeItem:(state,action)=>{
            const removeItem=state.items.find((items)=>items.id === action.payload);
            // state.items=removeItem
            if(removeItem){
                if(removeItem.quantity > 1){
                    // state.items=state.items.filter((items)=>items.id!==action.payload)
                    removeItem.quantity -=1;
                }else{
                    state.items=state.items.filter((items)=>items.id !== action.payload)
                }
            }
            toast.error("Item Removed")
            localStorage.setItem("cartItems",JSON.stringify(state.items));
        },
        clearCart: (state) => {
  state.items = [];
  localStorage.removeItem("cartItems");
  toast.info("Cart cleared");
}
    }
})  
export const{addToCart , removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer