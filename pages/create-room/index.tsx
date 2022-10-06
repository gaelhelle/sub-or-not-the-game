import Head from "next/head";
import Image from "next/image";
var randomWords = require("random-words");

export default function CreateRoom() {
  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <>
      <Head>
        <title>Sub or Not | The Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="h-screen bg-slate-700/80 text-white flex flex-col">
          <header className="flex items-center justify-center py-20">
            <Image
              src="/img/logo-sub-or-not-sub.png"
              width="200"
              height="140"
            />
          </header>
          <main className="lg:w-[600px] mx-auto py-20 flex-1">
            <form onSubmit={handleSubmit}>
              <label className="uppercase text-sm font-semibold text-slate-400 ml-3">
                Join a room
              </label>
              <div className="flex mt-3">
                <input
                  type="text"
                  className="rounded-full  bg-black/30 h-14 px-8 flex-1"
                  value={`${randomWords()}-${Math.floor(
                    Math.random() * 9999 + 1000
                  )}`}
                />
                <button className="ml-4 bg-[#FFB3D0] text-[#143F54] px-8  font-semibold rounded-full shadow-[0_5px_0_#fb4991] h-12">
                  Join a room
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}
