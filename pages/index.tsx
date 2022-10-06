import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sub or Not | The Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="h-screen ">
          <header className="px-14 top-10 mt-10 lg:px-32 lg:fixed lg:mt-0">
            test
          </header>
          <main className="lg:w-[900px] mx-auto flex items-center justify-center py-20 pt-8 lg:py-0 lg:pt-0 lg:h-full px-10 lg:px-0">
            test
          </main>
        </div>
      </div>
    </>
  );
}
