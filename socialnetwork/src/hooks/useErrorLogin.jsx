import Swal from "sweetalert2";

export const useErrorLogin = (res, setRes, login, setSuccessfulLogin) => {
    if (res?.status == 200) {
        const updatedUser = {    
          token: res.data.token,
          name: res.data.user.name,
          email: res.data.user.email,
          image: res.data.user.image,
          _id: res.data.user._id,
          rol: res.data.user.rol,
          privacy: res.data.user.privacy, 
          gender: res.data.user.gender,
          
        };
    
        const userString = JSON.stringify(updatedUser);
        login(userString);
        setSuccessfulLogin(() => true);
    
        Swal.fire({
          icon: "success",
          title: "Succesfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
    
      if (res?.response?.status == 404) {
        setRes(() => ({}));
        Swal.fire({
          icon: "error",
          title: "Sorry!",
          text: "This user is not registered! Try making an account, it's super easy!",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    
    
      if (res?.response?.data?.includes("Passwords don't match")) {
        Swal.fire({
          icon: "error",
          title: "Wrong password",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); 
      }
    
      if (res?.response?.status == 500) {
        Swal.fire({
          icon: "error",
          title: "Interval server error",
          text: "There was an error in our internal server. Please try again",
          showConfirmButton: false,
          timer: 1500,
        });
        setRes(() => ({})); 
      }
}
