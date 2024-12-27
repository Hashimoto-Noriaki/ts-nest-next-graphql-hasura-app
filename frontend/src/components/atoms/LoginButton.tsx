import { Button } from '@mui/material';
import React from 'react';

interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
      sx={{ mt: 3 }}
    >
      ログイン
    </Button>
  );
};
export default LoginButton;
