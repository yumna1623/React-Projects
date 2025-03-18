
//2 action 

//type,payload
//type is a string
const User_Login = "User_Login"
const User_Logout = "User_Logout"

const UserLogin = () => { //action creator
    return {
        type: User_Login,     //action
    }
}

const UserLogout = () => {
    return{
        type: User_Logout,
    }
}
export {UserLogin,UserLogout,User_Login,User_Logout} 