import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        primary: blue,
        secondary: grey,
        mode: 'light'
    },
});