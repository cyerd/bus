import Head from "next/head";
import Dashboard from "../src/components/Dashboard";
import Footer from "../src/components/Layouts/Footer";
import Header from "../src/components/Layouts/Header";






export default  function Home() {



  return (
    <div className="flex flex-col h-full justify-between  bg-gray-700 text-gray-400 ">
      {/* Page Title */}
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation bar || header bar  */}
      <Header />

      {/* main page content Dashboard */}
      <main className="flex w-full">
        <Dashboard />

      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
