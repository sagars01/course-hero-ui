import React from "react";
import { makeStyles } from "@mui/styles";
import { Alert, AlertTitle } from "@mui/material";

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    </div>
  );
}
``;
