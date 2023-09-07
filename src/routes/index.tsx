import { useContext, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { UserContext } from "../contexts/useUser";
import { firebaseAuth } from '../services/firebase';

import { Auth } from '../pages/auth';
import { Home } from "../pages/home";

export function Routes() {
  const { user, setUser } = useContext(UserContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function authStateChanged(user: any) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(firebaseAuth, authStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(user) return <Home />;
  return <Auth />;
}