import React from "react";
import DoggoCreateForm from "./Doggos/DoggoCreateForm";
import DoggosList from "./Doggos/DoggoList";
import { ContextProvider } from "./Doggos/DoggosContext";
import "./styles.css";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <DoggoCreateForm />
        <DoggosList />
      </div>
    </ContextProvider>
  );
}
