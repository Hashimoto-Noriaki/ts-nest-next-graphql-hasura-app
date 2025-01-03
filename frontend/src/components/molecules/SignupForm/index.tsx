import React from 'react';
import styles from './styles.module.css';

interface SignupFormProps {
  formData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  onInputChange,
  onSubmit
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>名前</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="名前"
          value={formData.name}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>メールアドレス</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>パスワード</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="パスワード"
          value={formData.password}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>パスワード確認</label>
        <input
          className={styles.input}
          type="password"
          name="password_confirmation"
          placeholder="パスワードの確認"
          value={formData.password_confirmation}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

export default SignupForm;
