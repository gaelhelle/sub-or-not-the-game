import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AspectRatio from "../../components/AspectRatio";
import Game from "../../components/Game";

export default function Room() {
  const [showSelectMessage, setShowSelectMessage] = useState(true);
  const [gameSize, setGameSize] = useState({ width: 1550, height: 600 });

  useEffect(() => {
    setTimeout(function () {
      setShowSelectMessage(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Sub or Not | Playing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="min-h-screen  text-white flex flex-col">
          <header className="flex items-center justify-center py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                src="/img/logo-sub-or-not-sub.png"
                width="200"
                height="130"
              />
            </motion.div>
          </header>

          {showSelectMessage && (
            <div className="fixed top-1/2 -translate-y-1/2 w-full z-10 text-center bg-black/60 py-8 font-semibold text-lg h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div>Select your ticket to start playing</div>
              </motion.div>
            </div>
          )}

          <div>
            <div className="px-12 xl:px-32 pb-12 xl:pb-24 pt-10">
              <AspectRatio width={gameSize.width} height={gameSize.height}>
                <Game showGame={showSelectMessage} />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
