"use client";

import { useState, useEffect } from 'react';
import { fetchDataWithLatestDate } from "../service/sheetService";
import Cell from "./cell";
import Row from "./row";
import { Player, SheetRow } from "./type";
import logo from '../../ui/shuttlecock.png';
import badminton from '../../ui/badminton.png';
import Image from 'next/image'; // Import Image component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Page() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sheetDataDateByLatestDate = await fetchDataWithLatestDate();

        if (!Array.isArray(sheetDataDateByLatestDate) || sheetDataDateByLatestDate.length === 0) {
          setLoading(false);
          return;
        }

        const playersData: Player[] = sheetDataDateByLatestDate.map((item: SheetRow) => new Player(item));
        setPlayers(playersData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching sheet data by date:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="overflow-x-auto">
        <DotLottieReact
          src="https://lottie.host/949fd376-6d56-46fa-b2f7-f22c313bba88/7nxd0fjtS9.lottie"
          loop
          speed={1.5}
          autoplay
          className="w-full h-[200px] flex justify-center items-center"
        />
        <div className="px-1 py-2">
          <div className="grid w-full place-content-center relative">
            <div className="text-white text-sm font-medium uppercase font-semibold pb-5">Loading data...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="px-1 py-2">
        <div className="grid w-full place-content-center relative">
          <h3 className="text-white text-sm font-medium uppercase font-semibold pb-5">
            Cập nhật tiền sân ngày gần nhất: {new Date(players[16].attendance).toLocaleDateString("vi-VN")}
          </h3>

          <div className="overflow-x-auto sm:overflow-visible">
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
                  player.name !== "TIỀN SÂN: " && <Row player={player} key={i} />
                ))}
              </tbody>
            </table>
          </div>

          <h1 className="text-xl font-bold text-white mb-4 py-2">Attendance</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {players.map(
              (player, i) =>
                player.attendance > 0 && (
                  <div key={i} className="flex flex-col items-center">
                    <div className="icon-container w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                      <Image
                        src={logo}
                        alt={`${player.name}'s attendance`}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="name-container mt-2">
                      <h5 className="text-white text-xs sm:text-sm font-medium">{player.name}</h5>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}