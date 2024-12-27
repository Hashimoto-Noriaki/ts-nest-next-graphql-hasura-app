import { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Link from 'next/link';

// 型定義
interface SignupForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<SignupForm>({
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
    <Container 
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 1,
        justifyContent: 'center',
        minHeight: '50vh', // ページ全体の中央に配置
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
          textAlign: 'center',
        }}
      >
        <SchoolIcon sx={{ fontSize: '3rem', mr: 1 }} />
        <Typography
          variant="h4"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          学習者、エンジニアのために記事の共有をしよう
        </Typography>
      </Box>

      <Typography
        variant="body2"
        align="center"
        sx={{ mb: 3 }}
      >
        新しくユーザ登録すると、あなたの作成した記事、お気に入りの記事がみんなに共有できるようになります。
      </Typography>

      <Typography
        variant="h5"
        component="h3"
        align="center"
        sx={{ mb: 3 }}
      >
        新規ユーザー登録
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%', // フォーム全体の幅
          maxWidth: '400px', // スマートな幅制限
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // 項目間のスペースを統一
        }}
      >
        <TextField
          label="名前"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="メールアドレス"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="パスワード"
          variant="outlined"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="パスワード確認"
          variant="outlined"
          name="password_confirmation"
          type="password"
          value={formData.password_confirmation}
          onChange={handleInputChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          新規登録
        </Button>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textAlign: 'center',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          <Link href="/login" passHref>
            既にアカウントをお持ちですか？ ログインはこちら
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
