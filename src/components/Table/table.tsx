import React from "react";
import { Player } from "../../lib/types";
import Cell from "./cell";
import Row from "./row";

const Table = (params: { data: Player[]; headers: string[] }) => {
  return (
    <div className="px-2 py-2">
      <div className="grid w-full place-content-center relative">
        <div className="grid-rows-subgrid">
          <table className="max-w-screen-lg text-sm text-center text-gray-500 ">
            <thead className="text-gray-400 uppercase bg-gray-700">
              <tr>
                {params.headers.map((header) => (
                  <Cell key={header} value={header} class="font-extrabold" />
                ))}
              </tr>
            </thead>
            <tbody>
              {params.data.map((player: Player, i: number) => {
                return <Row player={player} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
