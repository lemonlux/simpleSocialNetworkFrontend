import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { autoLoginUser } from "../services/user.service";


export const useAutoLogin = async (allUser) => {
const {login, user} = useAuth();

  try {
    const customFormData = {
      email: allUser?.data?.user?.email,
      password: allUser?.data?.user?.password
    };

    const sentAutoLoginData = await autoLoginUser(customFormData);
    console.log(sentAutoLoginData)
    if (sentAutoLoginData?.status == 200) {
    
      const { username, email, image, privacy, gender} = sentAutoLoginData.data.user;
        
      const customUser = {
        token: sentAutoLoginData.data.token,
        username,
        email,
        image,
        privacy,
        gender,
        _id: sentAutoLoginData.data.user._id,
        
      
      };
  

      const userToJSONString = JSON.stringify(customUser)
      login(userToJSONString);
      
 

        return <Navigate to="/log/start"/>
  
      
    } else {
      console.log("no entrooooo", sentAutoLoginData)
        return <Navigate to="/log/login"/>
    }
} catch (error) {
    return (
        error.message
    )
}
}