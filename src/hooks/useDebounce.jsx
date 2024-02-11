import { useEffect, useRef } from "react";

export default function useDebounce(callback, delay) {
  const timeOutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, []);

  const debounceCallback = (...args) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }

    timeOutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debounceCallback;
}
