import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products:[],
    loading:false,
    error:'',
    filterProducts:[]
}
export const fetchProducts=createAsyncThunk('products/fetchProducts',()=>{
    return axios.get('https://fakestoreapi.com/products').then(res=>{
     console.log(res.data)
    return res.data})
})

const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        filterItem:(state,action)=>{
            state.filterProducts=state.products.filter((el)=>{
                if(el.id===action.payload){
                    return true
                }
                return false
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.error=''
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default productsSlice.reducer
export const{filterItem}=productsSlice.actions