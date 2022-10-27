import { useReducer } from "react"
import { AuthState, User } from "../interfaces/UserInterface"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE:AuthState = {
    user:{
        password:'',
        username:''
    },
    auth:false
}

const superuser:User = {
    username:'Cristian',
    password:'12345'
}

const Checkuser = (password:string,username:string):boolean => {
    if(password === superuser.password && username === superuser.username){
        return true
    }else{
        return false
    }
}

export const AuthProvider = ({children}:AuthProviderProps) => {

    const [authState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    const handleLogin = (user:User) => {
        
        if(Checkuser(user.password,user.username)){
            
            dispatch({type:"login",payload:user});
            dispatch({type:"authcomplete",payload:{auth:true}});
        }
    }

    const handleLogOut = ()=>{
        dispatch({type:"login",payload:{username:'',password:''}});
        dispatch({type:"authcomplete",payload:{auth:false}});
    }

  return (
    <AuthContext.Provider 
    value={{
        authState,handleLogin,handleLogOut
    }}>
    {children}
    </AuthContext.Provider>
  )
}
