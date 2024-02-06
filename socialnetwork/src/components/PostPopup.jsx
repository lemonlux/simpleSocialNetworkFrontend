import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createPost } from "../services/post.service";
import { PostPopupElement } from "./styledComponents/PostPopup.Element";
import { ButtonPrimary } from "./styledComponents/ButtonPrimary";
import { FlexDir } from "./styledComponents/FlexDir";

export const PostPopup = ({ setPostPopup }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  const [inputValue, setInputValue] = useState("");

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



  const maxLength = inputValue?.length >= "280" ? true : false


  return (
    <PostPopupElement >
      <div id="uniqueDiv">
      {maxLength && 
        <div class="alert alert-danger" role="alert">
  Post must be 280 characters max
</div>}
        <form onSubmit={handleSubmit(submitPost)}>

          <textarea maxlength="300" {...register("text")} placeholder= "What is happening?!"onInput={(e) => {
                setInputValue(e.target.value);
              }} />
              <FlexDir  width="50%" justifyContent={"end"}>
              <p>{inputValue?.length}/280</p>
          <ButtonPrimary type="submit" width="100%" variant="normal" >
            {sent ? "Loading" : "Post"} 
          </ButtonPrimary>
         
          </FlexDir>
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
