'use client';
import React, { useState } from "react";
import FetchSheetData from '../components/FetchSheetData'
import FetchAllSheetID from "@/components/FetchAllSheetId";

export default function Home() {
  const [sheetId, setSheetId] = useState("1258623711");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FetchAllSheetID />
        <FetchSheetData sheetId={sheetId} />
      </footer>
    </div>
  );
}
