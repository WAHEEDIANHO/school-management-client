import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    "id": string,
    "email": string,
    "userName": string,
    "phoneNumber": string,
    "lastName": string,
    "firstName": string,
    "otherName": string,
    "stateOfOrigin": string,
    "localGovArea": string,
    "homeAddress":string,
    "role": string,
    "gender": string,
    "dateofBirth": string,
    "bloodGroup": string,
    "religion": string
}

interface IUserState {
    reguser: IUser | null,
}


const initialState: IUserState = {
    reguser: null,
}

const userSlice =createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsers(state, action) {
            console.log("user -----> store", action.payload)
            state.reguser = action.payload;
        },
    }
})

export const userAction = userSlice.actions;
export default userSlice