import { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LoginButton from '../components/atoms/LoginButton';
import Link from 'next/link';

// 型定義
interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
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
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5
        }}
      >
        <Box
          component="i"
          className="fas fa-chalkboard-teacher"
          sx={{ mr: 1, fontSize: '2rem' }}
        />
        <SchoolIcon sx={{ mr: 1, fontSize: '3rem' }} />
        <Typography variant="h4" align="center">
          記事共有サイト
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          display: 'block',
          textAlign: 'center',
          mt: 1
        }}
      >
        ログインすると、
        <br />
        あなたが作成した記事、お気に入りの記事を共有ができるようになります。
      </Typography>

      <Typography
        variant="h5"
        component="h5"
        align="center"
        sx={{ mt: 5, fontSize: '2rem' }}
      >
        ログイン
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 3
        }}
      >
        {/* メールアドレスラベル */}
        <Typography
          variant="body2"
          align="left"
          sx={{
            width: '100%',
            mt: 4
          }}
        >
          メールアドレス
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Typography
          variant="body2"
          align="left"
          sx={{
            width: '100%',
            mt: 4
          }}
        >
          パスワード
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {/* atomsのLoginButtonを使用 */}
        <LoginButton />

        {/* サインアップリンク */}
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            textAlign: 'center',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          <Link href="/signup" passHref>
            新規ユーザ登録する？
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
