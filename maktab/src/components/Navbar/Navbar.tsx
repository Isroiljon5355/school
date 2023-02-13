import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Text,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import navLink from "./components/data";
import useStyles from "./styles/navStyle";

const HEADER_HEIGHT = 75;

// interface HeaderResponsiveProps {
//   id: number;
//   title: string;
//   link: string;
// }

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();

  const [activeId, setActiveId] = useState(0);

  const items = navLink.map((item) => (
    <Link
      key={item.title}
      href={item.link}
      onClick={() => setActiveId(item.id)}
      className={cx(classes.link, {
        linkActive: item.link === router.pathname,
      })}
    >
      <Text>{item.title}</Text>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Text>Namangan_Travel</Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        {/* <ChangeLang /> */}
      </Container>
    </Header>
  );
};
export default Navbar;
