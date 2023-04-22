import React from "react";
import CardList from "./components/Card/CardList";

function App() {
  const players: string[] = ["dalpeh", "westernal"];
  return (
    <main>
      <CardList players={players} />
    </main>
  );
}

export default App;
