import styled from "styled-components";

import {
  Button,
  grommet,
  Grommet,
  Header as HeaderCmp,
  Heading,
} from "grommet";

import { Moon, Sun } from "grommet-icons";
import Navigation from "./navigation";

const HeaderLayout = styled(HeaderCmp)`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: none;
`;

const Title = styled(Heading)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Toggler = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  justify-self: end;
`;

interface HeaderProps {
  darkMode: boolean;
  onToggleMode: () => void;
}

export default function Header({ darkMode, onToggleMode }: HeaderProps) {
  const headerBg = darkMode ? "dark-2" : "light-2";

  return (
    <Grommet theme={grommet} themeMode={darkMode ? "dark" : "light"}>
      <HeaderLayout
        pad="medium"
        background={headerBg}
        sticky="scrollup"
        gap="none"
      >
        <Navigation />
        <Title textAlign="center">Another todo</Title>

        <Toggler
          primary
          icon={darkMode ? <Moon size="medium" /> : <Sun size="medium" />}
          onClick={onToggleMode}
        />
      </HeaderLayout>
    </Grommet>
  );
}
