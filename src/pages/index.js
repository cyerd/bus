import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import { Fragment } from "react";






export default  function Home() {



  return (
    <Fragment>
      <div className="flex flex-col h-full justify-between  ">
        {/* Navigation bar || header bar  */}
        <Header />

        {/* main page content Dashboard */}
        <main className="flex w-full">
          <Dashboard />
        </main>

        {/* footer */}
        <Footer />
      </div>
    </Fragment>
  );
}
