import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/pets.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Alguns direitos reservados.</p>
    </footer>
  );
};
 
export default Footer;
