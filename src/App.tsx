import React from "react";
import CardList from "./components/Card/CardList";
import Header from "./components/Header/header";

function App() {
  const players: string[] = ["dalpeh", "westernal"];
  return (
    <main>
      <Header />
      <CardList players={players} />
    </main>
  );
}

export default App;
