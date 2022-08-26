import { createSlice } from '@reduxjs/toolkit';
/*
    createSlice 하나로 action, payload를 설정할 수 있다.
    
    userSlice 를 통해 3가지 데이터를 관리.
    1. displayName
    2. uid
    3. accessToken : firebase Rest API Data 통신을 위한 개인 인증 토큰 (로그인을 할때마다 바뀌진않지만, 로그인 여부 추적에 사용)
*/
export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "",
        uid: "",
        accessToken: "",
        photoURL: "",
        isLoading: false,
    },
    reducers: {
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
            state.photoURL = action.payload.photoURL;
            state.isLoading = true;
        },
        clearUser: (state) => {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
            state.isLoading = true;
        },
    },

});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;