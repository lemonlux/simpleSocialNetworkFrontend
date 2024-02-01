import "./Register.css";

import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { registerUser } from "../services/user.service";
import { UploadFile } from "../components/UploadFile";
import { useErrorRegister } from "../hooks/useErrorRegister";


import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';




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

      <div className="formMain">
        <div className="formTitle">
        <h1 >Happening now</h1>
        <h2>Join today</h2>
        </div>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">

          <label htmlFor="username" className="customPlaceholder">
              Username
            </label>
            <input
              className="inputForm"
              type="text"
              id="usernname"
              name="username"
              autoComplete="false"
              {...register("username", { required: true })}
            />
           
  
          <label htmlFor="email" className="customPlaceholder">
              E-mail
            </label>
            <input
              className="inputForm"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />

          <label htmlFor="password" className="customPlaceholder">
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

           <p className="customPlaceholder">Gender</p>
            <div className="formGroup">
            <div className="interest">
              <input
                type="radio"
                name="interest"
                id="female"
                value="female"
                {...register("gender", {required: true})}
              />
              <label htmlFor="female" className="labelRadio">
                Woman
              </label>

              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                {...register("gender", {required: true})}
              />
              <label htmlFor="male" className="labelRadio ">
                Men
              </label>
              <input
                type="radio"
                name="interest"
                id="nonbinary"
                value="nonbinary"
                {...register("gender", {required: true})}
              />
              <label htmlFor="nonbinary" className="labelRadio ">
                Nonbinary
              </label>
            </div>
            </div>
            <p className="customPlaceholder">Account privacy</p>
    <div className="radioMUI">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style= {{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
      >
        <FormControlLabel value="private" control={<Radio />} label="private" {...register("privacy", {required: true})}/>
        <FormControlLabel value="public" control={<Radio />} label="public" {...register("privacy", {required: true})} />
      </RadioGroup>
    </FormControl>

    </div>

          
          <UploadFile />
          <div className="btnContainer">
          <button className="btnNormal" type="submit"
              disabled={sent} >
 {sent ? "Loading..." : "Sing up"}
</button>

            <div className="loginForm">
        <p className="loginParagraph">
          Already a member? <Link to="/log/login">Login Here</Link>
        </p>
      </div>
          </div>

          <p className="bottomText">
            <small className="terms">
              By clicking the Sign Up button, you agree to our{" "} <br />
              <Link to="/terms" className="anchorCustom">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="anchorCustom">
                Privacy Policy
              </Link>
              .
            </small>
          </p>
        </form>
      </div>

  );
};
