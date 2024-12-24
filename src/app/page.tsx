'use client';

import Link from "next/link";
import { mainbar } from "../lib/mainbar";
import { GlobalNav } from "../ui/global-nav";

// import React, { useState } from "react";
// import FetchSheetData from '../components/FetchSheetData'
// import FetchAllSheetID from "../components/FetchAllSheetId";

// export default function Home() {
//   const [sheetId, setSheetId] = useState("1258623711");

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <FetchAllSheetID />
//         <FetchSheetData sheetId={sheetId} />
//       </footer>
//     </div>
//   );
// }

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className='text-xl font-medium text-gray-500'>Example</h1>

      <div className="space-y-10 text-white">
        {mainbar.map((section) => {
          return (
            <div key={section.name} className='space-y-5'>
              <div className='text-xs text-gray-400 font-semibold uppercase tracking-wider'>
                {section.name}
              </div>

              <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
                {section.items.map((item) => {
                  return (
                    <Link href={`/${item.slug}`} key={item.name}
                      className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800'
                    >
                      <div className='font-medium text-black-200 group:hover:text-black-50'>
                        {item.name}
                      </div>

                      {item.description ?? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
}






