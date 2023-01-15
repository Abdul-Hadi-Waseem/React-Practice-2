import { createContext } from "react";
import { AuthData } from "../models/models";
//isko default value chahie hoti hai for eg yahan isAuthenticated hai tou initially false hoga ho
//Simple boolean se kaam hoskta hai but we will create proper objects
const defaultAuth: AuthData = {
  isLoggedIn: false,
  setAuthentication: () => {},
};
const AuthContext = createContext<AuthData>(defaultAuth);
export default AuthContext;
//Isko ab use krenge lekin react ko phly batana parega k kis kis component main is context ka access miljaye
//Agar puri app main use krna hai tou app.tsx main use krlo
//Sirf login main use krna hai tou sirf usi file main use kro
