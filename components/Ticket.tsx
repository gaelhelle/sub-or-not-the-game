import Image from "next/image";
import { useState } from "react";

type Props = {
  number: number;
  disabled?: boolean;
  onClick?: any;
  isUserTicket?: boolean;
};

const Tickets = (props: Props) => {
  const { number, disabled, onClick, isUserTicket } = props;

  return (
    <div
      onClick={onClick}
      className={`group relative flex item-center justify-center transition overflow-hidden ${
        disabled
          ? "text-black/30 cursor-default"
          : isUserTicket
          ? "text-black/70"
          : "text-[#143F54] cursor-pointer hover:rotate-6 hover:scale-105"
      }`}
    >
      {disabled ? (
        <Image src="/img/tickets/ticket-disabled.svg" width="200" height="92" />
      ) : isUserTicket ? (
        <Image src="/img/tickets/ticket-selected.svg" width="200" height="92" />
      ) : (
        <Image src="/img/tickets/ticket.svg" width="200" height="92" />
      )}

      <div className="text-4xl font-bold absolute top-0 h-full left-0 right-0 z-10 flex items-center justify-center">
        <div className="relative -top-1">{number}</div>
      </div>
      {!disabled && !isUserTicket && (
        <div className="hidden group-hover:block bg-white/40 rotate-45 w-20 h-14 absolute left-1/5 blur-md" />
      )}
    </div>
  );
};

export default Tickets;
