import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: false,
    isLogin: "",
    prjName: ""
};

const common = createSlice({
    name: "portfolio_v2",
    initialState,
    reducers: {
        setMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        setLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        setPrjName: (state, action) => {
            state.prjName = action.payload;
        }
    }
});

export { common };
export const {
    setMobile,
    setLogin,
    setPrjName
} = common.actions;
export default common.reducer;