/*
CSS Hex
.color-primary-0 { color: #6394F3 } 
.color-primary-1 { color: #F3F7FE }
.color-primary-2 { color: #9EBCF6 }
.color-primary-3 { color: #2D70F3 }
.color-primary-4 { color: #0353F1 }

*/

import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    text: {
      primary: "#08415cff",
      secondary: "#bb0a21ff"
    },
  }
});

export type ThemeType = {
  colors: {
    primary: string;
    background: string;
    secondary: string;
    secondaryBackground: string;
    tertiary: string;
  }
}