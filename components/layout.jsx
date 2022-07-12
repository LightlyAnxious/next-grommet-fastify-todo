import { Main } from "grommet";
import Header from "./header";

export default function Layout({ darkMode, onToggleMode, children }) {
  return (
    <>
      <Header darkMode={darkMode} onToggleMode={onToggleMode} />
      <Main fill="vertical" pad="medium">
        {children}
      </Main>
    </>
  );
}
