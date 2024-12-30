"use client";

import { useState, useEffect } from "react";
import { fetchSheetDataWithDate } from "../../../../service/sheetService";
import Cell from "./cell";
import Row from "./row";
import { Player, SheetRow } from "./type";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface PageProps {
  params: Promise<{
    "data-by-date": string;
    year: string;
    month: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the resolved params if it is a Promise
        const resolvedParams = await params;

        const sheetDataDateByDate = await fetchSheetDataWithDate(resolvedParams["data-by-date"]);

        if (!Array.isArray(sheetDataDateByDate) || sheetDataDateByDate.length === 0) {
          console.warn("Warning: No data available or incorrect format:", sheetDataDateByDate);
          setLoading(false);
          return;
        }

        const playersData: Player[] = sheetDataDateByDate.map((item: SheetRow) => new Player(item));
        setPlayers(playersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sheet data by date:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/949fd376-6d56-46fa-b2f7-f22c313bba88/7nxd0fjtS9.lottie"
          loop
          autoplay
          speed={1.5}
          className="w-full h-[200px] flex justify-center items-center"
        />
      </div>
    );
  }

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div className="overflow-x-auto">
          <div className="px-2 py-2">
            <div className="grid w-full place-content-center relative">
              <div className="grid-rows-subgrid">
                <table className="max-w-screen-lg text-sm text-center text-gray-500">
                  <thead className="text-gray-400 uppercase bg-black-700">
                    <tr>
                      {Object.keys(players[0]).map((header) => (
                        <Cell key={header} value={header} class="font-extrabold" />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {players.map(
                      (player, i) =>
                        player.name !== "TIỀN SÂN: " && <Row player={player} key={i} />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
