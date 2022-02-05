import React from "react";
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import DarkModeButton from '../components/DarkModeButton';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__home}>
                <div className={styles.header__home__title}><Link href="/"><a rel="home">Philippe Joulot</a></Link></div>
                <div className={styles.header__home__description}>Full-Stack Developer</div>
            </div>
            <div className={styles.header__menu}>
                <Link href="/">
                    <a>About me</a>
                </Link>
                <Link href="/">
                    <a>CV</a>
                </Link>
                <Link href="/">
                    <a>Projects</a>
                </Link>
                <Link href="/">
                    <a>Blog</a>
                </Link>
            </div>
            <div className={styles.header__actions}>
                <DarkModeButton></DarkModeButton>
                <Link href="/about" passHref>
                    <Button variant="contained" color="primary">Contact</Button>
                </Link>
            </div>
        </div>
    </div>
  );
}
