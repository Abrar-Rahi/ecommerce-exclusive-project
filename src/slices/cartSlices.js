import { createSlice } from '@reduxjs/toolkit'

export const cartSlices = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state,action) => {
        if(state.value.length == 0){
            state.value.push(action.payload)
        }else{
            let arr = []
           state.value.map(item =>{
            if(item.name == action.payload.name){
                item.quantity++
                arr.push(item.name)
            }
        })
            if(arr.indexOf(action.payload.name) == -1){
                state.value.push(action.payload)
            }
            
        }

        
    },
  },
})


export const { addToCart} = cartSlices.actions

export default cartSlices.reducer