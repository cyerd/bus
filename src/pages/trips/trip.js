import Head from "next/head";
import React from "react";
import Header from "../../components/Layouts/Header";
import Trips from "../../components/Trips";
import Triptest from "../../components/Triptest";

function trip() {
  return (
    <div>
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Triptest />
    </div>
  );
}

export default trip;
