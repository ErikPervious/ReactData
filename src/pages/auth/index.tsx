import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { UserContextProps, UserContext } from '../../contexts/useUser';

export function Auth() {
  const { handleCreateAccount } = useContext<UserContextProps>(UserContext);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <div className={`${styles.container}`}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>LOGIN</h1>
        <input 
          type="email" 
          className={`${styles.input} ${styles.inputEmail}`} 
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className={`${styles.input} ${styles.inputPassword}`} 
          placeholder='Password'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button 
          type="submit"
          className={`${styles.buttonLogin}`}
          onClick={() => handleCreateAccount(username, email)}
        >
          ENTRAR
        </button>
      </div>
    </div>
  )
}  