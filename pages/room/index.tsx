import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ItemSelection from "../../components/ItemSelection";
import Tickets from "../../components/Ticket";
import { motion } from "framer-motion";
import { AppContext } from "../../providers/AppProvier";
import { Resizable, ResizableBox } from "react-resizable";
import AspectRatio from "../../components/AspectRatio";

const PRICES = [
  1, 5, 10, 25, 50, 100, 150, 200, 300, 500, 800, 1000, 2500, 4000, 5000, 6500,
  8000, 10000, 15000, 25000, 50000, 100000, 500000, 1000000,
];

const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const RAND_PRICES = getShuffledArr(PRICES);

const half = Math.ceil(PRICES.length / 2);
const firstHalf = PRICES.slice(0, half);
const secondHalf = PRICES.slice(half);

const TICKETS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const assignPricesToTickets = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const price = {
      value: arr[i],
      assignedPrice: RAND_PRICES[i],
    };
    newArr.push(price);
  }

  return newArr;
};

const ASSIGNED_TICKETS = assignPricesToTickets(TICKETS);

export default function Room() {
  const { selectedTicket, setSelectedTicket } = useContext(AppContext);
  const [availableTickets, setAvailableTickets] = useState(TICKETS);
  const [availablePrices, setAvailablePrices] = useState(PRICES);
  const [showSelectMessage, setShowSelectMessage] = useState(true);

  const [gameSize, setGameSize] = useState({ height: 700, width: 1920 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const container2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const ticketsAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  const handleClickTicket = (id) => {
    if (selectedTicket) {
      if (id === selectedTicket) return;
      setAvailableTickets((state) => state.filter((item) => item !== id));

      const selectedPrice = ASSIGNED_TICKETS.find((item) => item.value === id);

      setAvailablePrices((state) =>
        state.filter((item) => item !== selectedPrice.assignedPrice)
      );
    } else {
      setSelectedTicket(id);
    }
  };

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
              <AspectRatio>
                <main className="w-full mx-auto flex justify-between space-x-16">
                  <div className="w-[320px] relative">
                    {}
                    <div className="absolute -top-12 rounded bg-slate-700/80 w-full px-3 py-3">
                      <div className="text-xs">
                        {selectedTicket ? (
                          <>
                            <span className="opacity-50 mr-2">
                              Player ticket
                            </span>
                            <span className="font-semibold">
                              {selectedTicket}
                            </span>
                          </>
                        ) : (
                          <span className="opacity-50">
                            Please select a ticket
                          </span>
                        )}
                      </div>
                    </div>
                    <motion.div
                      initial="hidden"
                      animate={!showSelectMessage && "show"}
                      variants={container}
                      transition={{ staggerChildren: 0.05 }}
                    >
                      {firstHalf.map((item) => (
                        <ItemSelection
                          key={item}
                          number={item}
                          disabled={!availablePrices.includes(item)}
                        />
                      ))}
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <motion.div
                      initial="hidden"
                      animate={!showSelectMessage && "show"}
                      variants={ticketsAnimation}
                      transition={{ delay: 1 }}
                      className="grid gap-4 grid-cols-4"
                    >
                      {ASSIGNED_TICKETS.map((item) => (
                        <Tickets
                          key={item.value}
                          number={item.value}
                          disabled={!availableTickets.includes(item.value)}
                          onClick={() => handleClickTicket(item.value)}
                          isUserTicket={selectedTicket === item.value}
                        />
                      ))}
                    </motion.div>
                  </div>
                  <div className="w-[320px]">
                    <motion.div
                      initial="hidden"
                      animate={!showSelectMessage && "show"}
                      variants={container2}
                      transition={{
                        staggerChildren: 0.05,
                        delay: 0.5,
                        beforeChildren: true,
                      }}
                    >
                      {secondHalf.map((item) => (
                        <ItemSelection
                          key={item}
                          number={item}
                          disabled={!availablePrices.includes(item)}
                        />
                      ))}
                    </motion.div>
                  </div>
                </main>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
