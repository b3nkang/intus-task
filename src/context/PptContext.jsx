import React, { createContext, useState, useContext, useEffect } from "react";

const ParticipantsContext = createContext();
export const useParticipants = () => useContext(ParticipantsContext);

export const ParticipantsProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);
  console.log("FROM CONTEXT");

  useEffect(() => {
    fetch("/api/participants")
      .then((response) => response.json())
      .then(setParticipants)
      .catch((error) => console.error("Error loading participants:", error));
  }, []);

  console.log("FROM CONTEXT");
  console.log(participants);
  return (
    <ParticipantsContext.Provider value={{ participants, setParticipants }}>
      {children}
    </ParticipantsContext.Provider>
  );
};
