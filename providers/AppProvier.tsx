import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState<number>();

  const values = { selectedTicket, setSelectedTicket };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
