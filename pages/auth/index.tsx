import { Card, CardContent, styled } from "@mui/material";
import React from "react";
import EmailAuthForm from "../../components/Auth/EmailAuth";
import { signInEmailLink } from "./firebase.services";

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
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export default function CenteredCard() {
  const handleEmailAuthSubmit = (email: string | null): void => {
    if (email) signInEmailLink(email, window.location.origin + "/auth/verify");
  };

  return (
    <Root>
      <CardWrapper>
        <CardContent>
          <EmailAuthForm onSubmit={handleEmailAuthSubmit} />
        </CardContent>
      </CardWrapper>
    </Root>
  );
}
