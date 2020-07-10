import React from "react";
import { BaseProvider, LightTheme, DarkTheme } from "baseui";
import { useTheme, THEME } from "src/hooks/Theme";

const BaseUIProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();
  const Theme = theme === THEME.Light ? LightTheme : DarkTheme;
  return <BaseProvider theme={{ ...Theme }}>{children}</BaseProvider>;
};

export default BaseUIProvider;
