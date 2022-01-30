import React from "react";
import styles from '../styles/footer.module.scss';
import { SiDrupal } from 'react-icons/si'
import { ImNpm } from 'react-icons/im'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'


export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__inner}>
        <div className={styles.footer__copyright}>© 2016 - 2022 Philippe Joulot. All rights reserved.</div>
        <div className={styles.footer__socials}>
            <a href="https://github.com/pjoulot" rel="noopener noreferrer nofollow"  target="_blank" title="Github" aria-label="Github"><BsGithub /></a>
            <a href="http://fr.linkedin.com/pub/philippe-joulot/89/490/b7a" rel="noopener noreferrer nofollow"  target="_blank" title="LinkedIn" aria-label="LinkedIn"><BsLinkedin /></a>
            <a href="https://twitter.com/Stargayte" rel="noopener noreferrer nofollow"  target="_blank" title="Twitter" aria-label="Twitter"><BsTwitter /></a>
            <a href="https://www.drupal.org/u/phjou" rel="noopener noreferrer nofollow"  target="_blank" title="Drupal" aria-label="Drupal"><SiDrupal /></a>
            <a href="https://www.npmjs.com/~stargayte" rel="noopener noreferrer nofollow"  target="_blank" title="Npm" aria-label="Npm"><ImNpm /></a>
        </div>
        </div>
    </div>
  );
}
