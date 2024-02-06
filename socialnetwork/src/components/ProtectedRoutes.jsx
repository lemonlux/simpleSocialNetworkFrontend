import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export const ProtectedRoutes = ({children}) => {
    const {user, isDeletedUser} = useAuth();
    if(isDeletedUser){
        return <Navigate to="/log/signup"/>
    }
    if(user == null) {

        return <Navigate to="/log/login"/>
    }
  return children;
}
