
const {createSlice,createAsyncThunk} = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        auth: [],
        status: null,
    },
    reducers: {
        // login: (state, action) => {

        //     state.data=action.payload;
        // },
        // logout: (state, action) => {
        //     state = state.filter((item) => item.id !== action.payload.id);
        // },
        // setStaus: (state, action) => {
        //     state.status = action.payload;
        // },
        

    },
    extraReducers:(builder)=>{
builder.addCase(loginAsync.pending,(state,action)=>{

    state.status='loading';
})

.addCase(loginAsync.fulfilled,(state,action)=>{ 

    state.status='success';
    state.auth=action.payload;
})
.addCase(loginAsync.rejected,(state,action)=>{
    state.status='failed';
    
})
    
    }

});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;

//thunks
export const loginAsync = createAsyncThunk('auth/loginAsync', async (payload) => {

}

);