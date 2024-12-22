import React from 'react';
import { AppBar, Toolbar, Typography, Button,  Menu } from '@mui/material';
import { styled } from '@mui/system';

// AppBarのスタイルをstyled-componentsで固定
const StyledAppBar = styled(AppBar)`
  background-color: #00bfff !important;
`;


const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const Logo = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  color: white;
`;

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* ロゴ部分 */}
        <Logo>
          記事共有サイト
        </Logo>
        {/* メニューボタン */}
        <div>
          <StyledButton onClick={handleMenuClick}>メニュー</StyledButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {/* <MenuItem onClick={handleCloseMenu}>
              <Link href="/register" passHref>
                <a style={{ textDecoration: 'none', color: 'black' }}>新規ユーザ登録</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Link href="/login" passHref>
                <a style={{ textDecoration: 'none', color: 'black' }}>ログイン</a>
              </Link>
            </MenuItem> */}
          </Menu>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
