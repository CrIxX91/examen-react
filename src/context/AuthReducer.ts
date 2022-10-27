import { AuthState, User } from "../interfaces/UserInterface";

type AuthAction = 
    | {type:'login', payload:User}
    | {type:'authcomplete', payload:{auth:boolean}};

export const AuthReducer = (state:AuthState,action:AuthAction):AuthState => {

switch (action.type) {
    case "login":  
        return{
            ...state,user:action.payload
        }
    case "authcomplete":
        return{
            ...state,auth:action.payload.auth
        }


    default:
        return state;
}
}