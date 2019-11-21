import { createContainer } from "unstated-next";
import usePersistedState from "../utils/usePersistedState";

function useAppStore() {
  const [darkMode, setDarkMode] = usePersistedState<boolean>("darkMode", false);

  function toggleDarkMode() {
    setDarkMode((prev: boolean) => !prev);
  }

  return {
    darkMode,
    toggleDarkMode
  };
}

export default createContainer(useAppStore);
