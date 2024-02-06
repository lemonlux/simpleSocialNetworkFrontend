

import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { registerUser } from "../services/user.service";
import { UploadFile } from "../components/UploadFile";
import { useErrorRegister } from "../hooks/useErrorRegister";


import * as React from 'react';
import { PLink, ButtonPrimary, FlexDir, Form, H1Form, H2Form, LabelAndInput, RadioInput, Small } from "../components";
import { useAutoLogin } from "../hooks/useAutoLogin";





export const Register = () => {

  //!-- states
  const [res, setRes] = useState({});
  const [sent, setSent] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  //!-- hooks
  const { allUser, bridgeData, setIsDeletedUser } = useAuth();
  const { register, handleSubmit } = useForm();

  //!-- fetch

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

  //!-- useEffect
  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);

useEffect(() => {
  setIsDeletedUser(()=> false);
}, [])


  if (okRegister) {
    if (!localStorage.getItem("user")) {
      useAutoLogin(allUser);
    }
    return <Navigate to="/log/start" />;
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
          variant="normal"
        >
          <div type="submit"></div>
          {sent ? "Loading..." : "Sign up"}
        </ButtonPrimary>
        <FlexDir margin={"0"}>
          Already a member?
          <Link to="/log/login">
            <PLink>Login Here</PLink>
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
