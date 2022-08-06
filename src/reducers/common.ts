import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: false,
    isLogin: "",
    prjName: "",
    selectMenu: "",
    isSpinner: 0
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
        },
        setSelectMenu: (state, action) => {
            state.selectMenu = action.payload;
        },
        setIsSpinner: (state, action) => {
            state.isSpinner = action.payload;
        }
    }
});

export { common };

export const {
    setMobile,
    setLogin,
    setPrjName,
    setSelectMenu,
    setIsSpinner
} = common.actions;

export default common.reducer;