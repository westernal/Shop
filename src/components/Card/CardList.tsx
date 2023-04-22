import React from "react";
import Card from "./Card";
import { Player } from "../../types/Types";

const CardList = ({ players }: { players: string[] }) => {
  return (
    <section className="m-3 grid-cols-1 place-items-center grid">
      {players.map((player: string, index: number) => {
        return <Card player={player} key={index} />;
      })}
    </section>
  );
};

export default CardList;
