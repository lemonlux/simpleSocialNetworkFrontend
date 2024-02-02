

import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { registerUser } from "../services/user.service";
import { UploadFile } from "../components/UploadFile";
import { useErrorRegister } from "../hooks/useErrorRegister";


import * as React from 'react';
import { FlexDir } from "../components/styledComponents/FlexDir";
import { H1Form } from "../components/styledComponents/H1Form";
import { ButtonPrimary } from "../components/styledComponents/ButtonPrimary";
import { Small } from "../components/styledComponents/Small";
import { LabelAndInput } from "../components/styledComponents/LabelAndInput";
import { RadioInput } from "../components/styledComponents/RadioInput";
import { Anchor } from "../components/styledComponents/Anchor";
import { Form } from "../components/styledComponents/Form";
import { H2Form } from "../components/styledComponents/H2Form";




export const Register = () => {
  // allUser es la respuesta completa del 200 del service de registro
  const { setAllUser, bridgeData, setIsDeletedUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [sent, setSent] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile.length != 0) {
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSent(true);
      setRes(await registerUser(customFormData));
      setSent(false);
    } else {
      const customFormData = {
        ...formData,
      };

      setSent(true);
      setRes(await registerUser(customFormData));
      setSent(false);
    }
  };
  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);

useEffect(() => {
  setIsDeletedUser(()=> false);
}, [])


  if (okRegister) {
    return <Navigate to="/" />;
  }



  return (



    <Form
      width={"40vw"}
      height={"100vh"}
      onSubmit={handleSubmit(formSubmit)}
    >
      <FlexDir direction={"column"} gap={"2px"} width="100%">
      <FlexDir direction={"column"} gap={"2px"} width="100%" alignItems="start">
        <H1Form margin={"8px 0 0 0"}>Happening now</H1Form>
    <H2Form >Join today</H2Form>
   </FlexDir>
        <FlexDir margin={"0 0 8px 0"}></FlexDir>

        <LabelAndInput>
          Username
          <input
            type="text"
            name="username"
            autoComplete="false"
            {...register("username", { required: true })}
          />
        </LabelAndInput>

        <LabelAndInput>
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="false"
            {...register("email", { required: true })}
          />
        </LabelAndInput>

        <LabelAndInput>
          Password
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
        </LabelAndInput>

        <LabelAndInput alignItems={"center"}>
          <RadioInput>
            <input
              type="radio"
              name="gender"
              id="woman"
              value="female"
              {...register("gender", { required: true })}
            />
            <label htmlFor="woman" className="labelRadio">
              Woman
            </label>
            <input
              type="radio"
              name="gender"
              id="man"
              value="male"
              {...register("gender", { required: true })}
            />
            <label htmlFor="man" className="labelRadio">
              Man
            </label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="nonbinary"
              {...register("gender", { required: true })}
            />
            <label htmlFor="other" className="labelRadio">
              Other
            </label>
          </RadioInput>
         
        </LabelAndInput>
        <LabelAndInput alignItems={"center"}>
          Account Privacy
        <RadioInput>
        <input
              type="radio"
              name="private"
              id="private"
              value="private"
              {...register("privacy", { required: true })}
            />
            <label htmlFor="private" className="labelRadio">
              Private
            </label>
            <input
              type="radio"
              name="public"
              id="public"
              value="public"
              {...register("privacy", { required: true })}
            />
            <label htmlFor="public" className="labelRadio">
             Public
            </label>
          </RadioInput>
        </LabelAndInput>
        <UploadFile />

        <ButtonPrimary
          width={"70%"}
          type="submit"
          disabled={sent}
          variant={sent ? "loading" : "normal"}
        >
          <div type="submit"></div>
          {sent ? "Loading..." : "Sign up"}
        </ButtonPrimary>
        <FlexDir margin={"0"}>
          Already a member?
          <Link to="/log/login">
            <Anchor>Login Here</Anchor>
          </Link>
        </FlexDir>

        <FlexDir>
          <Small>
            By clicking the Sign Up button, you agree to our <br />
            <Link to="/terms" className="anchorCustom">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="anchorCustom">
              Privacy Policy
            </Link>
            .
          </Small>
        </FlexDir>
      </FlexDir>
    </Form>


  );
};