import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

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
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mt: 1
      }}
    >
      <Typography variant="body2" align="left" sx={{ width: '100%' }}>
        名前
      </Typography>
      <TextField
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={onInputChange}
        fullWidth
      />

      <Typography variant="body2" align="left" sx={{ width: '100%' }}>
        メールアドレス
      </Typography>
      <TextField
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        fullWidth
      />

      <Typography variant="body2" align="left" sx={{ width: '100%' }}>
        パスワード
      </Typography>
      <TextField
        variant="outlined"
        name="password"
        type="password"
        value={formData.password}
        onChange={onInputChange}
        fullWidth
      />

      <Typography variant="body2" align="left" sx={{ width: '100%' }}>
        パスワード確認
      </Typography>
      <TextField
        variant="outlined"
        name="password_confirmation"
        type="password"
        value={formData.password_confirmation}
        onChange={onInputChange}
        fullWidth
      />
    </Box>
  );
};

export default SignupForm;
