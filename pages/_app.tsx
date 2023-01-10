import "../styles/globals.css";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";

import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import initFirebase from "../utils/auth/firebase";
import { NotificationList, NotificationProvider } from "../utils/notifications/notification.provider";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  initFirebase();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <NotificationProvider>
          <NotificationList />
          <Component {...pageProps} />
        </NotificationProvider>
      </ThemeProvider>
    </>
  );
}
