import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../services/user.service";
import { useErrorLogin } from "../hooks/useErrorLogin";
import { useAuth } from "../context/authContext";
import { FlexDir } from "../components/styledComponents/FlexDir";
import { Form } from "../components/styledComponents/Form";
import { H1Form } from "../components/styledComponents/H1Form";
import { LabelAndInput } from "../components/styledComponents/LabelAndInput";
import { ButtonPrimary } from "../components/styledComponents/ButtonPrimary";
import { Small } from "../components/styledComponents/Small";
import { Anchor } from "../components/styledComponents/Anchor";
import { H2Form } from "../components/styledComponents/H2Form";


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

<Form  width={"40vw"}  height={"100vh"} onSubmit={handleSubmit(formSubmit)}>
<FlexDir direction={"column" } gap={"16px"} width="100%">
<FlexDir direction={"column"} gap={"2px"} width="100%" alignItems="start">
        <H1Form margin={"8px 0 0 0"}>Happening now</H1Form>
    <H2Form >Discover</H2Form>
   </FlexDir>
        <FlexDir margin={"0 0 8px 0"}></FlexDir>

  <LabelAndInput>
  <label htmlFor="email">
  Email
</label>
<input

  type="email"
  id="userEmail"
  name="userEmail"
  autoComplete="false"
  {...register("email", { required: true })}
/>
  </LabelAndInput>
  

  <LabelAndInput>
<label htmlFor="password">
  Password
</label>
<input

  type="password"
  id="password"
  name="password"
  autoComplete="false"
  {...register("password", { required: true })}
/>
</LabelAndInput>





<ButtonPrimary width={"70%"} type="submit" margin={"1rem 0 0 0"}
          disabled={sent} variant={ sent ? "loading" : "normal"}>
{sent ? "Loading..." : "Login"}
</ButtonPrimary>


    <FlexDir margin={"0 0 1rem"}>

Are you not registered? <Link to="/log/signup"><Anchor>Register Here</Anchor></Link>

</FlexDir>

</FlexDir>


</Form>

    </>
  );
};
