import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createPost } from "../services/post.service";
import { PostPopupElement } from "./styledComponents/PostPopup.Element";
import { ButtonPrimary } from "./styledComponents/ButtonPrimary";

export const PostPopup = ({ setPostPopup }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  const submitPost = async (formData) => {
    
    let customFormData = {
      text: formData.text
    };

    const response = await createPost(customFormData);
    setSent(true)
    if (response.status == 200) {
        setSent(false)
        setPostPopup(false)
        navigate("/feed");
       window.location.reload() // si ya está en el feed
    }
  };



  return (
    <PostPopupElement >
      <div id="uniqueDiv">
        <h1 style={{justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '22px'}}>What is happening?!</h1>

        <form onSubmit={handleSubmit(submitPost)}>
          <textarea {...register("text")} />
          <ButtonPrimary type="submit" width="100%" variant="normal" >
            {sent ? "Loading" : "Post"} 
          </ButtonPrimary>
        </form>
        <ButtonPrimary
          variant="delete"
          width="30%"
          onClick={() => setPostPopup(false)}
        >
          Cancel
        </ButtonPrimary>
      </div>
    </PostPopupElement>
  );
};
