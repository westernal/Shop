import React, { useEffect, useMemo, useState } from "react";
import API from "../../functions/API";
import { Player } from "../../types/Types";

const Card = ({ player }: { player: string }) => {
  const [playerInfo, SetPlayerInfo] = useState<Player>();
  const [playerStats, SetPlayerStats] = useState<any>();

  useEffect(() => {
    const getPlayerInfo = async () => {
      const info = await API(`/player/${player}`);

      if (info.status === 200) {
        SetPlayerInfo(info.data);
      }
    };

    const getPlayerStats = async () => {
      const info = await API(`/player/${player}/stats`);

      if (info.status === 200) {
        SetPlayerStats(info.data.chess_rapid);
        console.log(info.data.chess_rapid);
      }
    };

    getPlayerInfo();
    getPlayerStats();
  }, []);

  return (
    <a href={playerInfo?.url}>
      <article className="m-5 bg-violet-950 w-56 grid rounded p-3 place-items-center grid-cols-1">
        <img
          src={playerInfo?.avatar}
          alt="Avatar"
          className="w-20 rounded-full border-violet-400 border-solid border-2"
        />
        <p className="pt-2">{playerInfo?.name}</p>
        <p className="pt-1 text-zinc-400">@{playerInfo?.username}</p>
        <section className="stats mt-2">
          <div className="rating flex justify-center items-center">
            <p className="text-violet-300">Rating:</p>{" "}
            <p className="pl-1 text-center text-sm ">
              {playerStats?.last?.rating}
            </p>
          </div>
          <div className="record flex justify-center items-center mt-2">
            <p className="text-violet-300">Wins:</p>{" "}
            <p className="pl-1 text-center text-sm ">
              {playerStats?.record?.win}
            </p>
            <p className="text-violet-300 pl-3">Lost:</p>{" "}
            <p className="pl-1 text-center text-sm ">
              {playerStats?.record?.loss}
            </p>
            <p className="text-violet-300 pl-3">Draw:</p>{" "}
            <p className="pl-1 text-center text-sm ">
              {playerStats?.record?.draw}
            </p>
          </div>
        </section>
      </article>
    </a>
  );
};

export default Card;
