import { useUser } from "@/lib/firebase/useUser";
import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export default function NavBar() {
  const { user, logout } = useUser();
  const [currentUser, setCurrentUser] = useState(null);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const handleLogout = () => {
    console.log("currentUser", currentUser);
    console.log("user", user);
    logout();
    setCurrentUser(null);
  };

  return (
    <Navbar>
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text h1 size={18}>
          NewsGuardian.
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          size="xl"
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
        />
        {/* {!currentUser && (
          <React.Fragment>
            <Navbar.Link color="inherit" href="/login">
              Login
            </Navbar.Link>
            <Button auto flat as={Link} href="/signup">
              Sign Up
            </Button>
          </React.Fragment>
        )} */}

        {currentUser && (
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => {
                if (actionKey === "logout") {
                  logout();
                }
              }}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {currentUser?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Leaderboard
              </Dropdown.Item>
              <Dropdown.Item key="analytics">Stats</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback">Feedback</Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Navbar.Content>
    </Navbar>
  );
}
