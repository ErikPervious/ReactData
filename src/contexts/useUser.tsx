import { firebaseAuth } from "../services/firebase";
import { UserCredential } from "firebase/auth";
import React, { createContext, useState } from "react";

import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

export interface UserContextProps {
  user: UserCredential | null;
  setUser: React.Dispatch<React.SetStateAction<UserCredential | null>>;
  handleLogin: (username: string, email: string) => void;
  handleCreateAccount: (username: string, email: string) => void;
  handleLogout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({children}: React.PropsWithChildren) {
  const [user, setUser] = useState<UserCredential | null>(null);

  async function handleLogin(username: string, email: string) {
    await signInWithEmailAndPassword(firebaseAuth, email, username)
    .then((userCredential) => {
      setUser(userCredential);
    })
  }

  async function handleCreateAccount(username: string, email: string) {
    await createUserWithEmailAndPassword(firebaseAuth, email, username)
    .then((userCredential) => {
      setUser(userCredential);
    })
  }

  async function handleLogout() {
    await firebaseAuth.signOut();
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, setUser, handleCreateAccount, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}