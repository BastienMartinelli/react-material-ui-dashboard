import { useState } from "react";
import { createContainer } from "unstated-next";

function useAppStore() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  return {
    darkMode,
    toggleDarkMode
  };
}

export default createContainer(useAppStore);
