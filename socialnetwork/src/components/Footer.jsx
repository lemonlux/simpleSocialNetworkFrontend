import { useEffect, useState } from "react"
import { addFollowing, getAllUserP, getUserById } from "../services/user.service"
import { MiniProfile } from "./MiniProfile"
import { DivLine } from "./styledComponents/DivLine"
import { FlexDir } from "./styledComponents/FlexDir"
import { FooterElement } from "./styledComponents/Footer.element"
import { Loading } from "./styledComponents/Loading"
import { H2Form } from "./styledComponents/H2Form"
import { H1Form } from "./styledComponents/H1Form"
import { PLink } from "./styledComponents/PLink"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"


export const Footer = () => {
  //!--states
  const [res, setRes] = useState(null); //* -- feed
  const [send, setSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userFollowing, setUserFollowing] = useState([]); //* -- following
  const [updatedFollowing, setUpdatedFollowing] = useState(false);

    //!--hooks
    const { user } = useAuth();


  //!-- fetch

  const setGallery = async () => {

      setSend(true);
      setRes(await getAllUserP());

      setIsLoading(false);
      setSend(false);

  };

console.log(res)
  const addToFollowing = async (id) => {
    const response = await addFollowing(id);
    console.log(response);
    setUpdatedFollowing(!updatedFollowing);
  };

  const getFollowing = async () => {
    const response = await getUserById(user._id);
    setUserFollowing(response?.data?.following);
  };

//!-- useEffect

  useEffect(() => {
    setGallery();
  }, []);

  useEffect(() => {
    getFollowing();

  }, [updatedFollowing]);


  return (
    isLoading ? (
      <Loading />
    ) :
    <FooterElement>


<FlexDir
        direction="column"
        height="auto"
      gap="16px"
        justifyContent="center"
        width="85%" 
        padding="8px 16px"
        className="footerDiv"
      >
        <H1Form fontSize={"30px"}>You might know</H1Form>
{res?.data?.slice(1,4).map((item) => (
              <>
                {console.log(item?.username)}
                <MiniProfile
                privacy={item.privacy}
                 key={item._id}
                  username={item?.username}
                  img={item?.image}
                  id={item?._id}
                  // description={item?.description}
                  addToFollowing={addToFollowing}
                  userFollowing={userFollowing}
                  variant = "mini"
                />
              </>
            ))}

<Link to="/search"> <PLink  >Show More</PLink></Link>
      </FlexDir>
      <FlexDir
      margin="12px 0 0 0"
        direction="column"
        height="auto"
        justifyContent="center"
        width="85%" 
        padding="8px 16px"
        className="footerDiv"
      >
      <MiniProfile
      
                 key={user._id}
                  username={user.username}
                  img={user.image}
                  id={user._id}
                  privacy={user.privacy}
                  // description={item?.description}
                  variant = "mini"
                />
                </FlexDir>
      <FlexDir
        direction="column"
        height="auto"
      gap="16px"
        justifyContent="center"
        width="85%" 
        padding="8px 16px"
       
      >

  <p className="terms">Terms of Service  Privacy Policy  Cookie Policy   Accesibility Adds Info</p>

  </FlexDir>


    </FooterElement>
  )
}
