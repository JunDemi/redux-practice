import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", //전역 상태 이름
    //초깃값
    initialState: {
        value: 1
    },
    //reducer
    reducers: {
        //action
        secondPage: (state) => {
            state.value = 2;
        },
        thirdPage: (state) => {
            state.value = 3;
        }
    }
});

export const {secondPage, thirdPage} = counterSlice.actions;
export default counterSlice.reducer;