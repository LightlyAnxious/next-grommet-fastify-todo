import { Grommet, grommet } from "grommet";
import { useCallback, useState } from "react";
import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const onToggleMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <Grommet full theme={grommet} themeMode={darkMode ? "dark" : "light"}>
      <Layout darkMode={darkMode} onToggleMode={onToggleMode}>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  );
}

export default MyApp;
