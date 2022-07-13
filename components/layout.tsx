import { Main } from "grommet";
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
        {children}
      </Main>
    </>
  );
}
