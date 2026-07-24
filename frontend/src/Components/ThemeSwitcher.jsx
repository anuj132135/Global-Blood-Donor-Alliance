import React from "react";
import { Button, useTheme } from "@heroui/react";

function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme("system");

  return (
    <>
      <Button
        onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </Button>
    </>
  );
}

export default ThemeSwitcher;
