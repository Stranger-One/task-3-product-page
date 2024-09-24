import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState:{
        loading: true,
        products: [],
    },
    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setProducts, setLoading } = globalSlice.actions
export default globalSlice.reducer