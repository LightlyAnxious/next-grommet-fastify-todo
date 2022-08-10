import { Grid, Main } from "grommet";
import {
  ReactNode,
  Ref,
  useRef,
  ElementRef,
  useLayoutEffect,
  useState,
} from "react";
import styled from "styled-components";
import Header from "./header";

interface LayoutProps {
  darkMode: boolean;
  onToggleMode: () => void;
  children?: ReactNode;
}

interface MainProps {
  offset?: number;
  pad: string;
}

const MainWrapper = styled(Main)<MainProps>`
  max-height: ${({ offset }) => `calc(100vh - ${offset}px)`};
  overflow: scroll;
`;

export default function Layout({
  darkMode,
  onToggleMode,
  children,
}: LayoutProps) {
  const [headerOffset, setHeaderOffset] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      const { height } = headerRef.current.getBoundingClientRect();

      setHeaderOffset(height);
    }
  }, []);

  return (
    <>
      <Header ref={headerRef} darkMode={darkMode} onToggleMode={onToggleMode} />
      <MainWrapper offset={headerOffset} pad="medium">
        <Grid
          fill="horizontal"
          alignSelf="center"
          margin={{ vertical: "medium" }}
          width={{ max: "600px" }}
        >
          {children}
        </Grid>
      </MainWrapper>
    </>
  );
}
