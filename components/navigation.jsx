import {
  Anchor,
  grommet,
  Grommet,
  Menu,
  Nav,
  ResponsiveContext,
} from "grommet";
import { Menu as MenuIcon, Close } from "grommet-icons";
import { deepMerge } from "grommet/utils";
import Link from "next/link";
import { css } from "styled-components";

const navTheme = {
  menu: {
    icons: {
      down: MenuIcon,
      up: Close,
    },
  },
};

export default function Navigation() {
  return (
    <Grommet theme={navTheme}>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" ? (
            <Menu
              items={[
                { label: "Create", onClick: () => {} },
                { label: "Edit", onClick: () => {} },
                { label: "Dashboard", onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="/create" label="Create"></Anchor>
              <Anchor href="/edit" label="Edit" />
              <Anchor href="/" label="Dashboard" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
