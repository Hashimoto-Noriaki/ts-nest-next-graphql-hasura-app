import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterWrapper = styled(Box)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: #00bfff;
  color: white;
  padding: 20px 10px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Typography variant="body2" color="inherit">
        ©Ariticle share site
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
