import { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Link from 'next/link';
import styled from 'styled-components';

// 型定義
interface SignupForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// styled-components でスタイルを定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SubTitle = styled(Typography)`
  display: inline-block;
  text-align: left;
  margin-bottom: 20px;
`;

const SignupButton = styled(Button)`
  margin-top: 20px;
`;

const LoginLink = styled(Typography)`
  margin-top: 10px;
  text-align: center;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

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
    <Container maxWidth="sm">
      <Title variant="h4">
        <SchoolIcon sx={{ marginRight: 1, fontSize: '3rem' }} />
        学習者、エンジニアのために記事の共有をしよう
      </Title>
      <SubTitle variant="body2">
        新しくユーザ登録すると、
        <br />
        あなたの作成した記事、お気に入りの記事がみんなに共有できるようになります。
      </SubTitle>

      <Typography
        variant="h5"
        component="h3"
        align="center"
        sx={{ width: '100%' }}
      >
        新規ユーザー登録
      </Typography>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <TextField
            label="名前"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="メールアドレス"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="パスワード"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            label="パスワード確認"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password_confirmation"
            type="password"
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />

          <SignupButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            新規登録
          </SignupButton>

          <Box mt={3}>
            <Link href="/login" passHref>
              <LoginLink variant="body2">
                既にアカウントをお持ちですか？ ログインはこちら
              </LoginLink>
            </Link>
          </Box>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Signup;
