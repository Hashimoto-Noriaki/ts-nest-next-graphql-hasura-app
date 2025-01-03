import React from 'react';
import styles from './styles.module.css';

interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} type="submit">
      ログイン
    </button>
  );
};

export default LoginButton;
