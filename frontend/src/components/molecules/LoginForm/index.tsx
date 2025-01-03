import React from 'react';
import styles from './styles.module.css';

const LoginForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>メールアドレス</label>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>パスワード</label>
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          className={styles.input}
        />
      </div>
    </form>
  );
};

export default LoginForm;
