import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import SchoolIcon from '@mui/icons-material/School';
import SignupButton from '../../components/atoms/SignupButton';
import SignupForm from '../../components/molecules/SignupForm';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // サーバーへの送信処理をここで実装する
    // console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SchoolIcon className={styles.icon} />
        <h1 className={styles.title}>
          学習者、エンジニアのために記事の共有をしよう
        </h1>
      </div>

      <p className={styles.description}>
        新しくユーザ登録すると、あなたの作成した記事、お気に入りの記事がみんなに共有できるようになります。
      </p>

      <h2 className={styles.subtitle}>新規ユーザー登録</h2>

      <SignupForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <SignupButton />

      <div className={styles.loginLink}>
        {/* <a>タグを使わずに<span>を使用 */}
        <Link href="/login">
          <span className={styles.link}>
            既にアカウントをお持ちですか？ ログインはこちら
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
