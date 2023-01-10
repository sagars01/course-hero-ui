import { Box, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { checkSignInWithEmailLink } from "../../../utils/auth/firebase.services";
import { funnyMessages } from "../../../utils/app.message";

interface Props {}
const AuthVerify: React.FunctionComponent<Props> = ({}) => {
  const [message, setMessage] = useState("loading");
  const setAFunnyMessage = (): void => {
    const lengthOfArray = funnyMessages.length;
    setMessage(funnyMessages[Math.floor(Math.random() * lengthOfArray - 1)]);
  };
  useEffect(() => {
    checkSignInWithEmailLink();
    setAFunnyMessage();
    const interval = setInterval(() => {
      setAFunnyMessage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const CenteredBox = styled.div`
    position: fixed;
    text-align: center;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 40%;
  `;

  return (
    <>
      <CenteredBox>
        <Typography style={{ marginBottom: "1rem" }} variant="subtitle1">
          {message}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </CenteredBox>
    </>
  );
};
export default AuthVerify;
