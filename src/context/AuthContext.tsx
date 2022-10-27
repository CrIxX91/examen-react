import { createContext } from "react";
import { AuthState, User } from "../interfaces/UserInterface";

export type AuthContextProps = {
    authState:AuthState;
    handleLogin: (user:User) => void;
    handleLogOut:()=>void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
