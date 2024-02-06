import { useEffect, useState } from "react";
import {
  ButtonPrimary,
  FlexDir,
  Form,
  H1Form,
  H2Form,
  H3Feed,
  LabelAndInput,
  Loading,
  RadioInput,
} from "../components";
import { Navigate } from "react-router-dom";
import { UploadFile } from "../components/UploadFile";
import { getUserById, updateUser } from "../services/user.service";
import { useErrorUpdate } from "../hooks/useErrorUpdate";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";

export const Settings = () => {
  //! ---- states
  const [res, setRes] = useState({});
  const [sent, setSent] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ok, setOk] = useState(false);

  //! -- hooks
  const { user, logout } = useAuth();
  const { handleSubmit, register } = useForm();
  const [gender, setGender] = useState(user?.gender);
  const [privacy, setPrivacy] = useState(user?.privacy);

  //! --- fetch
  const fetchData = async () => {
    const response = await getUserById(user?._id);
    setData(response);
    setIsLoading(false);
  };

  const editProfileFormSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    if (inputFile.length != 0) {
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSent(true);
      setRes(await updateUser(customFormData));
      setSent(false);
    } else {
      const customFormData = {
        ...formData,
        image: user?.image,
      };
      setSent(true);
      setRes(await updateUser(customFormData));
      setSent(false);
    }
  };

  //!-- useEffects
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    useErrorUpdate(res, setRes, logout, setOk);
  }, [res]);

  if (ok) {
    return <Navigate to="/log/login" />;
  }

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Form width="100%" onSubmit={handleSubmit(editProfileFormSubmit)}>
            <h2>Edit profile </h2>
            <FlexDir direction="column" width="100%" gap="12px">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={user?.image}
                alt={user?.name}
              />

              <LabelAndInput alignItems={"center"}>
                Account privacy
                <RadioInput minW={"68%"}>
                  <input
                    type="radio"
                    defaultChecked={privacy == "private" && true}
                    name="private"
                    id="private"
                    value="private"
                    {...register("privacy", { required: true })}
                  />
                  <label
                    htmlFor="private"
                    className="labelRadio"
                    onClick={() => setPrivacy("private")}
                  >
                    Private
                  </label>
                  <input
                    type="radio"
                    defaultChecked={privacy == "public" && true}
                    name="public"
                    id="public"
                    value="public"
                    {...register("privacy", { required: true })}
                  />
                  <label
                    htmlFor="public"
                    className="labelRadio"
                    onClick={() => setPrivacy("public")}
                  >
                    Public
                  </label>
                </RadioInput>
              </LabelAndInput>

              <LabelAndInput direction={"column"}>
                Username
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="false"
                  defaultValue={data?.data?.username}
                  {...register("username")}
                />
              </LabelAndInput>

              <LabelAndInput inputHeight={"60px"}>
                Bio
                <textarea
                  type="text"
                  defaultValue={data?.data?.description}
                  name="description"
                  autoComplete="false"
                  {...register("description")}
                />
              </LabelAndInput>

              <FlexDir direction={"column"}>
                <FlexDir>
                  <RadioInput minW={"68%"}>
                    <input
                      defaultChecked={gender == "male" && true}
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      {...register("gender")}
                    />
                    <label htmlFor="male" onClick={() => setGender("male")}>
                      Man
                    </label>

                    <input
                      defaultChecked={gender == "female" && true}
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      {...register("gender")}
                    />
                    <label htmlFor="female" onClick={() => setGender("female")}>
                      Woman
                    </label>

                    <input
                      defaultChecked={gender == "nonbinary" && true}
                      type="radio"
                      name="gender"
                      id="other"
                      value="nonbinary"
                      {...register("gender")}
                    />
                    <label
                      htmlFor="other"
                      onClick={() => setGender("nonbinary")}
                    >
                      Other
                    </label>
                  </RadioInput>
                </FlexDir>
              </FlexDir>

              <UploadFile />
            </FlexDir>

            <FlexDir>
              <ButtonPrimary
                type="submit"
                width="210px"
                disabled={sent}
                variant="normal"
              >
                Save
              </ButtonPrimary>
            </FlexDir>
          </Form>
        </>
      )}
    </>
  );
};
