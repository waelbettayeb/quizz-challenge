import React, { useEffect, useState } from "react";
import { isServer } from "styletron";

import { useTheme, THEME } from "src/hooks/Theme";
import LoadingScreen from "src/components/molecules/LoadingScreen";

const Start: React.FC = ({ children }) => {
  const { theme } = useTheme();
  const color = theme === THEME.Light ? "white" : "black";
  useEffect(() => {
    document.body.style.background = color;
  }, [color]);
  return (
    <React.Fragment>
      {isServer ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Start;
