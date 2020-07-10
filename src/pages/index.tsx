import React from "react";
import Head from "next/head";
import AppNavBar from "src/components/molecules/AppNavBar/AppNavBar";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Quizz - app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavBar />
    </React.Fragment>
  );
};
export default Home;
