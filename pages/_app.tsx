import "../styles/globals.css";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";

import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import type { AppProps } from "next/app";
import React from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
