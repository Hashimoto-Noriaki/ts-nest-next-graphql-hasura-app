import { Button } from '@mui/material';
import React from 'react';

interface SignupButtonProps {
  onClick?: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({ onClick }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="success"
      fullWidth
      sx={{ mt: 2 }}
      onClick={onClick}
    >
      新規登録
    </Button>
  );
};
export default SignupButton;
