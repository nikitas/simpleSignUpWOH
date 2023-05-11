import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
};

const common = {
  black: "#000000",
  white: "#FFFFFF",
  green: "#D0F83E",
  grey: "#202020",
};

const yellow = {
  0: "#FFFFFF",
  50: "#F4F4F4",
  100: "#E9E9E9",
  200: "#DEDEDE",
  300: "#BDBDBD",
  400: "#848484",
  500: "#737373",
  600: "#666666",
  700: "#555555",
  800: "#434343",
  900: "#222222",
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider
      theme={createTheme({
        typography: {
          fontFamily: ["Orbitron", 'Cairo',"sans-serif"].join(","),
          fontSize: 12,
          subtitle1: {
            fontSize: "16px",
            fontWeight: 800,
            lineHeight: "24px",
            color: common.black,
            fontStyle: "normal",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          },
          body1: {
            fontFamily: 'Cairo',
            fontStyle: 'normal',
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "21px",
            color: common.white,
          },
          body2: {
            fontFamily: 'Cairo',
            fontSize: "13px",
            fontWeight: 700,
            lineHeight: "21px",
            color: common.green,
            fontStyle: "normal",
          },
          subtitle2: {
            fontFamily: 'Cairo',
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "20px",
            color: common.green,
            fontStyle: "normal",
          },
          h1: {
            fontSize: "28px",
            fontWeight: 800,
            lineHeight: "40px",
            color: common.black,
            fontStyle: "normal",
          },
          h2: {
            fontFamily: 'Orbitron',
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: "33px",
            color: common.white,
            fontStyle: "normal",
          },
        },
        palette: {
          background: {
            default: "#f0f0f0",
            paper: "#ffffff",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "0px",
              }
            },
            defaultProps: {
              variant: "outlined",
              disableFocusRipple: true,
            },
            variants: [
              {
                props: { variant: "outlined", size: "medium" },
                style: {
                  textTransform: "none",
                  background: common.green,
                  color: common.black,
                  padding: `$7px 9px`,
                  maxWidth: "200px",
                  minWidth: "36px",
                  maxHeight: "36px",
                  "&:hover": {
                    background: common.green
                  },
                  ".MuiButton-iconSizeMedium": {
                    marginLeft: 0,
                    marginRight: 0,
                  },
                },
              },
            ],
          },
        },
      })}
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
