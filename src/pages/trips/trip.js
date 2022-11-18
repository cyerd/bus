import Head from "next/head";
import React from "react";
import Header from "../../components/Layouts/Header";
import Trips from "../../components/Trips";


function trip() {
  return (
    <div>
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default trip;
