import { AppProps } from "next/app";

import { Provider as StyletronProvider } from "styletron-react";

import { styletron, debug } from "../../../styletron";
import Start from "./start";
import { ThemeProvider } from "src/hooks/Theme";
import BaseUIProvider from "./BaseUIProvider";
import { SessionProvider } from "@hooks/Session";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <ThemeProvider>
        <BaseUIProvider>
          <SessionProvider>
            <Start>
              <Component {...pageProps} />
            </Start>
          </SessionProvider>
        </BaseUIProvider>
      </ThemeProvider>
    </StyletronProvider>
  );
};

export default MyApp;
