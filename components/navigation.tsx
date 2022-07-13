import { Anchor, Grommet, Menu, Nav, ResponsiveContext } from "grommet";
import { Menu as MenuIcon, Close } from "grommet-icons";
import Link from "next/link";

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
        {(responsive: string) =>
          responsive === "small" ? (
            <Menu
              items={[
                /* @ts-ignore */
                { label: "Create", onClick: () => {} },
                /* @ts-ignore */
                { label: "Edit", onClick: () => {} },
                /* @ts-ignore */
                { label: "Dashboard", onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="/create" label="Create" />
              <Anchor href="/edit" label="Edit" />
              <Anchor href="/" label="Dashboard" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
