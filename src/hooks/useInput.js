import { useEffect, useState } from "react";
import { isAlpha } from "../utils/textParse";

const useInput = () => {
  const [keyStroke, setKeyStroke] = useState({ value: null, action: null });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      switch (key) {
        case "Backspace":
          setKeyStroke({ action: "remove" });
          break;
        case "Enter":
          setKeyStroke({ action: "enter" });
          break;
        default:
          if (isAlpha(key)) setKeyStroke({ value: key, action: "add" });
      }
    };

    const listener = document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(listener, handleKeyDown);
    };
  }, []);

  return keyStroke;
};

export default useInput;
