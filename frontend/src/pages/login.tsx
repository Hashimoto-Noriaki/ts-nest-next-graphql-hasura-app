import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LoginForm from '../components/molecules/LoginForm';
import LoginButton from '../components/atoms/LoginButton';
import Link from 'next/link';

const LoginPage: React.FC = () => {
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
        <SchoolIcon sx={{ mr: 1, fontSize: '3rem' }} />
        <Typography variant="h4" align="center">
          記事共有サイト
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ textAlign: 'center', mt: 1 }}>
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
      <LoginForm />
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
    </Container>
  );
};

export default LoginPage;
