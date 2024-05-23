import { createSlice } from "@reduxjs/toolkit";
const initialState = {}
const STATUS = {
    IDLE:'idle',
    LOADING:'loading',
    ERROR:'error'
}
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setProduct: (state,action) => {
            state.data = action.payload;
        },
        setStatus: (state,action) => {
            state.status = action.payload;
        }
    },
})
export const { setProduct,setStatus } = productSlice.actions
export default productSlice.reducer


//Thunks Middleware for api calling 

export function fetchProducts() {
    return async function fetchProductThunk(dispatch,getStatus) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch(error) {
            console.log(error,'error');
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}