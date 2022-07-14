import { Grid, Main } from "grommet";
import { ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
  darkMode: boolean;
  onToggleMode: () => void;
  children?: ReactNode;
}

export default function Layout({
  darkMode,
  onToggleMode,
  children,
}: LayoutProps) {
  return (
    <>
      <Header darkMode={darkMode} onToggleMode={onToggleMode} />
      <Main fill="vertical" pad="medium">
        <Grid
          fill="horizontal"
          alignSelf="center"
          margin={{ vertical: "medium" }}
          width={{ max: "600px" }}
        >
          {children}
        </Grid>
      </Main>
    </>
  );
}
