import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Router.push("/create-room");
  });

  return (
    <>
      <Head>
        <title>Sub or Not | The Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="h-screen ">
          <main className="lg:w-[900px] mx-auto flex items-center justify-center py-20 pt-8 lg:py-0 lg:pt-0 lg:h-full px-10 lg:px-0">
            Home
          </main>
        </div>
      </div>
    </>
  );
}
