import { useState, useCallback } from "react";

export const useCountUp = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const startCount = useCallback(() => {
    setHasStarted(true);
  }, []);

  return { startCount, hasStarted };
};
