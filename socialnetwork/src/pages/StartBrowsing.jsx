import { Link } from "react-router-dom";
import { FlexDir, H1Form, H2Form, SpanLink } from "../components";
import { useAuth } from "../context/authContext";

export const StartBrowsing = () => {

const { user } = useAuth()
  return (
    <FlexDir
      direction={"column"}
      gap={"2px"}
      width={"40vw"}
      height={"100vh"}
      alignItems="start"
    >
      <H1Form fontSize="50px">Welcome, @{user.username} </H1Form>
      <H2Form fontSize="28px" color="#74787d">
        The fun begins now.{" "}
      </H2Form>
      <H2Form fontSize="28px" color="#74787d">
        {" "}
        Start <Link to="/feed"><SpanLink>browsing</SpanLink></Link>, {" "}
        <Link to="/search"><SpanLink >find your friends</SpanLink></Link>, or {" "}
        <Link to="/settings"><SpanLink>customize your account</SpanLink></Link>.
      </H2Form>
    </FlexDir>
  );
};
