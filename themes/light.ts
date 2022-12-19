import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        primary: blue,
        secondary: pink,
        mode: 'dark'
    },
});