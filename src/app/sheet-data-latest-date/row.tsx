import React from "react";
import Cell from "./cell";
import { Player } from "./type";

const Row = (params: { player: Player }) => {
  const played: boolean = params.player.attendance > 0 ? true : false;

  return (
    <tr className="odd:bg-black even:dark:bg-black-800 border-b dark:border-black-700 sm:hidden">
      {Object.values(params.player).map((value: string | number, i: number) => {
        if (i !== 6 && played) {
          return (
            <Cell key={i} value={value} class="text-white font-extrabold sm:hidden" />
          );
        } else if (i === 6) {
          return (
            <Cell
              key={i}
              value={value}
              class={
                (+value > 0 ? "text-red-400" : "text-green-400") + " font-extrabold sm:hidden"
              }
            />
          );
        } else return <Cell key={i} value={value} />;
      })}
    </tr>
  );
};

export default Row;
