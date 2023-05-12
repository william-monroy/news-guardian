import { Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export default function NavBar() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

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
      </Navbar.Content>
    </Navbar>
  );
}
