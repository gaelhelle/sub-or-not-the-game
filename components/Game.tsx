import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AppContext } from "../providers/AppProvier";
import {
  ASSIGNED_TICKETS,
  firstHalf,
  PRICES,
  secondHalf,
  TICKETS,
} from "../variables";
import ItemSelection from "./ItemSelection";
import Tickets from "./Ticket";

type Props = {
  showGame?: boolean;
};

const Game = (props: Props) => {
  const { showGame } = props;
  const [availableTickets, setAvailableTickets] = useState(TICKETS);
  const [availablePrices, setAvailablePrices] = useState(PRICES);
  const { selectedTicket, setSelectedTicket } = useContext(AppContext);

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

  return (
    <main className="w-full mx-auto flex justify-between space-x-16">
      <div className="w-[320px] relative">
        <div className="absolute -top-12 rounded bg-slate-700/80 w-full px-3 py-3">
          <div className="text-xs">
            {selectedTicket ? (
              <>
                <span className="opacity-50 mr-2">Player ticket</span>
                <span className="font-semibold">{selectedTicket}</span>
              </>
            ) : (
              <span className="opacity-50">Please select a ticket</span>
            )}
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={!showGame && "show"}
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
          animate={!showGame && "show"}
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
          animate={!showGame && "show"}
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
  );
};

export default Game;
