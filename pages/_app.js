import { Grommet, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { useCallback, useState } from "react";
import { css } from "styled-components";
import Layout from "../components/layout";

import "../styles/globals.css";

const customTheme = {
  textInput: {
    extend: css`
      padding-left: 48px;
    `,
  },
};

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const onToggleMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <Grommet
      full
      theme={deepMerge(grommet, customTheme)}
      themeMode={darkMode ? "dark" : "light"}
    >
      <Layout darkMode={darkMode} onToggleMode={onToggleMode}>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  );
}

export default MyApp;
