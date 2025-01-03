import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import SchoolIcon from '@mui/icons-material/School';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SchoolIcon className={styles.icon} />
        <h1 className={styles.title}>記事共有サイト</h1>
      </div>

      <p className={styles.description}>
        ログインすると、
        <br />
        あなたが作成した記事、お気に入りの記事を共有ができるようになります。
      </p>

      <h2 className={styles.loginTitle}>ログイン</h2>

      <form className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          className={styles.input}
        />
        <button type="submit" className={styles.loginButton}>
          ログイン
        </button>
      </form>

      <div className={styles.signupLink}>
        {/* Signup Link */}
        <Link href="/signup">
          <span className={styles.signupText}>新規ユーザ登録する？</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
