import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const LoginForm: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 3
      }}
    >
      <Typography variant="body2" align="left" sx={{ width: '100%', mt: 4 }}>
        メールアドレス
      </Typography>
      <TextField variant="outlined" fullWidth margin="normal" name="email" />

      <Typography variant="body2" align="left" sx={{ width: '100%', mt: 4 }}>
        パスワード
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        name="password"
        type="password"
      />
    </Box>
  );
};

export default LoginForm;
