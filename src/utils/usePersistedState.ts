import { useState, useEffect, useRef } from "react";

export default function usePersistedState<T>(
  name: string,
  initial: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initial);
  const init = useRef(false);

  useEffect(() => {
    if (init.current) {
      localStorage.setItem(name, JSON.stringify(value));
    } else {
      let lastValue = localStorage.getItem(name);
      if (lastValue) {
        lastValue = JSON.parse(lastValue);
      }
      init.current = true;
      setValue((lastValue as unknown) as T);
    }
  }, [value]);

  return [value, setValue];
}
