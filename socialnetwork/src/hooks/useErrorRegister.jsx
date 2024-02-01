
import Swal from "sweetalert2"
export const useErrorRegister = (res, setRegisterOk, setRes) => {
  
  if (res?.status == 200) {
    const dataToString = JSON.stringify(res);
    localStorage.setItem("data", dataToString);
    setRegisterOk(() => true);
    Swal.fire({
      icon: "success",
      title: 'Register succesful',
      showConfirmButton: false,
      timer: 300,
    });
    setRes({});}
  //! ------------------- 409: user ya registrado

  if (res?.response?.status === 409) {
    Swal.fire({
      icon: "error",
      title: "Invalid email",
      text: "Please, enter a valid email",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  if (res?.response?.data?.message?.includes("User validation failed: gender: Path `gender` is required")) {
    Swal.fire({
      icon: "error",
      title: "Gender is a required filed",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }


  if (res?.response?.data?.message?.includes("This username already exists")) {
    Swal.fire({
      icon: "error",
      title: "This username is already in use",
      text: "Please, choose another one",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  //! ------------------- La contraseña no esta en el formato correcto
  if (res?.response?.data?.message?.includes("User validation failed: password:")) {
    Swal.fire({
      icon: "error",
      title: "Insuficient password",
      text: "The password must contain 8 characters, 1 upper case, 1 lower case and a special character",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  if (
    res?.response?.data?.message?.includes("E11000 duplicate key error collection"
    )
  ) {
    Swal.fire({
      icon: "error",
      title: "This username is already in use",
      text: "Please, try another one",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  //! -------------------- 500 : internal server error

  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Interval server error",
      text: "There was an error in our internal server. Please try again",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
