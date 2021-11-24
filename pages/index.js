import Head from 'next/head'
import Row1 from '../src/components/Row1';
import Row2 from '../src/components/Row2';
import Row3 from '../src/components/Row3';
import Row4567 from "../src/components/Row4567";
import Row8 from '../src/components/Row8';
import Row9 from '../src/components/Row9';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Periodic Table of Telements</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Periodic Table of Telements</h1>
      <small>With Next JS and CSS Grid</small>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4567 />
      <Row8 />
      <Row9 />
    </div>
  );
}
