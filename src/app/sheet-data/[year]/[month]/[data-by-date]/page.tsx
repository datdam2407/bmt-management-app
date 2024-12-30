"use client";

import { useState, useEffect } from "react";
import { fetchSheetDataWithDate } from "../../../../service/sheetService";
import Cell from "./cell";
import Row from "./row";
import { Player, SheetRow } from "./type";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // If you're using Lottie for loading

export default function Page({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ "data-by-date": string; year: string; month: string }>;
}) {
  const [players, setPlayers] = useState<Player[]>([]); // State for storing player data
  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await params and extract the "data-by-date" key
        const params = await rawParams;

        // Fetch the sheet data for the given "data-by-date"
        const sheetDataDateByDate = await fetchSheetDataWithDate(params["data-by-date"]);

        // Validate that the fetched data is an array
        if (!Array.isArray(sheetDataDateByDate) || sheetDataDateByDate.length === 0) {
          console.warn("Warning: No data available or incorrect format:", sheetDataDateByDate);
          setLoading(false);
          return;
        }

        // Map data to Player instances
        const playersData: Player[] = sheetDataDateByDate.map((item: SheetRow) => new Player(item));
        setPlayers(playersData); // Set the fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching sheet data by date:", error);
        setLoading(false); // Ensure loading is set to false if there's an error
      }
    };

    fetchData(); // Trigger the data fetching on component mount
  }, [rawParams]); // Dependency array to re-fetch when rawParams change

  if (loading) {
    // Display loading spinner while data is being fetched
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/949fd376-6d56-46fa-b2f7-f22c313bba88/7nxd0fjtS9.lottie"
          loop
          autoplay
          speed={1.5} // Adjust the speed as needed
          className="w-full h-[200px] flex justify-center items-center"
        />
      </div>
    );
  }

  return (
    <div className="space-y-9">
      <div>
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
                      {players.map((player, i) => (
                        player.name !== "TIỀN SÂN: " && (
                          <Row player={player} key={i} />
                        )
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
