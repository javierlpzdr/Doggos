import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { Doggo } from "./DoggosTypes.d";

export const DoggosContext = createContext({
  doggos: new Array<Doggo>(),
  setDoggos: (value: Array<Doggo>) => {
    console.error("There is no state created");
  }
});

export const ContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [doggos, setDoggos] = useState(new Array<Doggo>());
  const context = {
    doggos,
    setDoggos
  };

  return (
    <DoggosContext.Provider value={context}>{children}</DoggosContext.Provider>
  );
};

ContextProvider.PropTypes = {
  children: PropTypes.element.isRequired
};
