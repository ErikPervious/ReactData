import { useContext } from 'react';
import { UserContextProps, UserContext } from '../../contexts/useUser';

import styles from './styles.module.css';

export function Home() {
  const { handleLogout } = useContext<UserContextProps>(UserContext);

  async function handleLogoutClick() {
    handleLogout();
  }

  return (
    <div>
      <button className={`${styles.buttonExit}`} onClick={handleLogoutClick}>sair</button>
    </div>
  )
}