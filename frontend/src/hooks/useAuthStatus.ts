import { useState, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { user } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [user]);
  return { loggedIn, checkingStatus };
};
