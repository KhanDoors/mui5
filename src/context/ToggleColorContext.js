import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = React.createContext();

export default function ToggleColorContext({ children }) {
  const [mode, setMode] = React.useState("light");

  const colorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#141933",
          },
          secondary: {
            main: "#19857b",
          },
          error: {
            main: red.A400,
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, setMode, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => React.useContext(ColorModeContext);
