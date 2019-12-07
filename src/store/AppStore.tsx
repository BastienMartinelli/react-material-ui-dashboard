import { createContainer } from "unstated-next";
import usePersistedState from "../utils/usePersistedState";

type User = {
  userName: string;
  email: string;
  token: string;
};

function useAppStore() {
  const [darkMode, setDarkMode] = usePersistedState<boolean>("darkMode", false);
  const [user, setUser] = usePersistedState<User | null>("user", null);

  function toggleDarkMode() {
    setDarkMode((prev: boolean) => !prev);
  }

  return {
    darkMode,
    toggleDarkMode,
    user,
    setUser
  };
}

export default createContainer(useAppStore);
