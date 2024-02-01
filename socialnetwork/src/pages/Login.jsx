import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../services/user.service";
import { useErrorLogin } from "../hooks/useErrorLogin";
import { useAuth } from "../context/authContext";


export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [sent, setSent] = useState(false); 
  const [res, setRes] = useState({});
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const formSubmit = async (formData) => {
    setSent(true);
    setRes(await loginUser(formData));
    setSent(false);
  };

  useEffect(() => {
    useErrorLogin(res, setRes, login, setSuccessfulLogin);
  }, [res]);

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem("user");
  }, []);

  if (successfulLogin) {
          return <Navigate to="/" />;
      }
    

  return (
    <>
      <div className="allForm register">
      <div className="formMain">
      <div className="formTitle">
          <h1 className="titleFormH1">LOG IN</h1>
          </div>
          <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">
          <label className="placeHolder" htmlFor="email">
            Email
          </label>
          <input
            className="inputForm"
            type="email"
            id="userEmail"
            name="userEmail"
            autoComplete="false"
            {...register("email", { required: true })}
          />
          <label className="placeHolder" htmlFor="password">
            Password
          </label>
          <input
            className="inputForm"
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />

</div>

          <div className="btnContainer">
          <button className="btnNormal" type="submit"
              disabled={sent} >
 {sent ? "Loading..." : "Login"}
</button>
          </div>
          <p className="loginParagraph changePassword">
            
              Have you forgotten the password?{" "}
              <Link to="/forgotPassword" className="anchorCustom">
                Change password
              </Link>
            
          </p>
        </form>
        <div className="footerForm">
          <p className="parrafoLogin">
            Are you not registered? <Link to="/log/signup">Register Here</Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};
