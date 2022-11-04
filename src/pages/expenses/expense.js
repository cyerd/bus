import Head from 'next/head';
import React from 'react'
import Header from '../../components/Header'

function expense() {
  return (
    <div>
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Expense
    </div>
  );
}

export default expense