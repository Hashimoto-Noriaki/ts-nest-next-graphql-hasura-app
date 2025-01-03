import React from 'react';
import styles from './styles.module.css';

interface SignupButtonProps {
  onClick?: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} type="submit">
      新規登録
    </button>
  );
};

export default SignupButton;
