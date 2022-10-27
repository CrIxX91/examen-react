export interface User {
    username:string,
    password:string
}

export interface AuthState {
    auth:boolean,
    user:User
}