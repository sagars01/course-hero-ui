import {
  Card,
  CardContent,
  styled,
  CircularProgress,
  Typography,
} from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import React, { useState } from "react";
import EmailAuthForm from "../../components/Auth/EmailAuth";
import { signInEmailLink } from "../../utils/auth/firebase.services";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
  },
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const StateWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem 0;
`;

export default function CenteredCard() {
  const [formState, setFormState] = useState<any>(null);
  const handleEmailAuthSubmit = async (email: string | null): Promise<void> => {
    setFormState("loading");
    if (email) {
      const { success, error } = await signInEmailLink(
        email,
        window.location.origin + "/auth/verify"
      );
      if (success) setFormState("success");
      if (error) setFormState("error");
    }
  };

  return (
    <Root>
      <CardWrapper>
        <CardContent>
          {formState === null ? (
            <EmailAuthForm onSubmit={handleEmailAuthSubmit} />
          ) : formState === "loading" ? (
            <>
              <StateWrapper>
                <CircularProgress color="primary" size={"3rem"} />
              </StateWrapper>
              <StateWrapper>
                <Typography>Just a moment</Typography>
              </StateWrapper>
            </>
          ) : formState === "success" ? (
            <>
              <StateWrapper>
                <CheckCircleOutlineRoundedIcon
                  sx={{ fontSize: 70 }}
                  color="success"
                />
              </StateWrapper>
              <StateWrapper>
                <Typography>Success! Check your inbox to Sign-In</Typography>
              </StateWrapper>
            </>
          ) : formState === "error" ? (
            <>
              <StateWrapper>
                <ErrorOutlineRoundedIcon sx={{ fontSize: 70 }} color="error" />
              </StateWrapper>
              <StateWrapper>
                <Typography>Couldn't send email at this moment</Typography>
              </StateWrapper>
            </>
          ) : (
            <></>
          )}
        </CardContent>
      </CardWrapper>
    </Root>
  );
}
