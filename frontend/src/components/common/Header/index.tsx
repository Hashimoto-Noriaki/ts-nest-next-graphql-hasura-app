import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* ロゴ部分 */}
      <div className={styles.logo}>記事共有サイト</div>

      {/* メニューボタン */}
      <button className={styles.button} onClick={toggleMenu}>
        メニュー
      </button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        {/* 現在のパスに応じて表示するメニュー項目を制御 */}
        {router.pathname !== '/signup' && (
          <Link href="/signup" passHref>
            <span className={styles.menuItem} onClick={closeMenu}>
              新規ユーザ登録
            </span>
          </Link>
        )}
        {router.pathname !== '/login' && (
          <Link href="/login" passHref>
            <span className={styles.menuItem} onClick={closeMenu}>
              ログイン
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
