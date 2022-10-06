import Image from "next/image";

type Props = {
  number: number;
  disabled?: boolean;
  onClick?: () => void;
  isUserTicket?: boolean;
};

const Tickets = (props: Props) => {
  const { number, disabled, onClick, isUserTicket } = props;

  const imageSrc = disabled
    ? "/img/tickets/ticket-disabled.svg"
    : isUserTicket
    ? "/img/tickets/ticket-selected.svg"
    : "/img/tickets/ticket.svg";

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
      <Image src={imageSrc} width="200" height="92" />

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
