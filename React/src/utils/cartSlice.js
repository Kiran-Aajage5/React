import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice ({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers: {
        
        addItem: (state, action) =>{
            // mutating (dirctly modifing)
            state.items.push(action.payload);

        },
        removeItem:  (state)=>{
            state.items.pops();
        },
        clearCart: (state) => {
            state.items.length = 0
        }

    }
});

export const {addItem,removeItem,clearCart}  = cartSlice.actions;
export default cartSlice.reducer;