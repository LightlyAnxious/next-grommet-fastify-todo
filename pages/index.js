import { useState } from "react";
import { Box, Button, grommet, Grommet, Heading } from "grommet";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Grommet full theme={grommet} themeMode={darkMode ? "dark" : "light"}>
      <Box pad="large">
        <Heading>Another todo</Heading>

        <Button
          label="Toggle theme"
          onClick={() => setDarkMode((prev) => !prev)}
        />
      </Box>
    </Grommet>
  );
}
