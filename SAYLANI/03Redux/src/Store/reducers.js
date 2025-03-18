import { User_Login,User_Logout } from "./action"
import {combineReducers} from "redux"



const InitialState = {

    isLoggedin: false,
    user: null

}
const authReducer = (state =InitialState,action) => {

    if(action.type === User_Login){
        return {
            isLoggedin: true,
        
        }
    }
    else if(action.type === User_Logout){
        return {
            isLoggedin: false,
        }
    }
    else{
        return state
    }
}
const rootReducer = combineReducers({
    auth: authReducer
})
export default rootReducer