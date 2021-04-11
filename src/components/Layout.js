import React from 'react';
import styles from 'styles/pages/Home.module.scss';
import Head from 'next/head';
import Imdb from '../assets/imdb.svg';
import Pie from '../assets/pie.svg';
import Link from 'next/link'

export default function ({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flicks by PIE LLC</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
          <Pie/>
          </a>
        </Link>
      </header>

      <main className={styles.main}>
        {children}
      </main>


      <footer className={styles.footer}>
        <span className={styles.footerCp}>© 2021 PIE LLC</span>
        <div className={styles.footerLogo}>
          Movie data provided by <Imdb/>
        </div>
      </footer>
    </div>
  );
}
