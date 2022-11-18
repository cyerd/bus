import Head from "next/head";
import React from "react";
import Header from "../../components/Layouts/Header";

function expense() {
  return (
    <div>
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Expense
    </div>
  );
}

export default expense;
