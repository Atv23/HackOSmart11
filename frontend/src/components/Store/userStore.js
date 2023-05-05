import { configureStore, createSlice } from "@reduxjs/toolkit";
import * as jose from 'jose'
// create slice want three params name , initial value and reducer function
const initialState = { name: "", email: "", password: "",login:false};
const token=localStorage.getItem('token');
if (token) {
    
    // This is the whole object which is being converted to jwt
    const decodedJwt = jose.decodeJwt(token,"Vaibhav@2110")
    console.log(decodedJwt)
    // const userDataRecieve = decodedJwt.user;
    // initialState.name = userDataRecieve.name;
    initialState.login = true;
    // initialState.createdAt=userDataRecieve.createdAt;
    // initialState.id=userDataRecieve.id;
    // initialState.mobile=userDataRecieve.mobile;
    // initialState.email=userDataRecieve.email;
    // initialState.type_of_user=userDataRecieve.type_of_user;
    if (!decodedJwt) {
        localStorage.removeItem(token);
       
    }
}
const userData = createSlice({
    name: "users",
    initialState,
    reducers:{
        setname: (state, action) => void(state.name = action.payload),
        // setemail: (state, action) => void(state.email = action.payload),
        // setcreatedAt: (state, action) => void(state.createdAt = action.payload),
        setemail: (state, action) => void(state.email = action.payload),
        setpassword: (state, action) => void(state.password = action.payload),
        // settype_of_user: (state, action) => void(state.type_of_user = action.payload),
        setlogin: (state, action) => void (state.login = action.payload)
        
    }
});
const store = configureStore({reducer:{users:userData.reducer}});
// export default userData.actions;
// export const actions = userData.actions;
export const {  setname, setemail, setpassword,setlogin} = userData.actions;
export default store;
// export default {store,action:userData.actions};