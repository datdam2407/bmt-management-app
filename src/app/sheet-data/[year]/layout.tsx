"use client";

import { useEffect, useState } from "react";
import { TabGroup } from "../../../ui/tab-group";
import { fetchSheetWithYear } from "../../service/sheetService";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type MonthData = {
  name: string;
  // Add other properties as needed
};

type SheetData = {
  [month: string]: MonthData[]; // Example: 'January': [{...data}, {...data}]
  monthNames?: MonthData[]; // If monthNames exists
};

export default function Layout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ year: string }>;
}) {
  const [allMonth, setAllMonths] = useState<SheetData>({}); // State to store months data
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [error, setError] = useState<string | null>(null); // State for error
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = await rawParams; // Await the params to access the year
        const year = params.year; // Extract the 'year' value from params
        setYear(year); 

        const sheetData = await fetchSheetWithYear(year); 
        setAllMonths(sheetData); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching sheet data:", error);
        setError("Failed to load data"); 
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [rawParams]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/949fd376-6d56-46fa-b2f7-f22c313bba88/7nxd0fjtS9.lottie"
          loop
          autoplay
          speed={1.5} // Adjust speed if necessary
          className="w-full h-[200px] flex justify-center items-center"
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="space-y-5">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/sheet-data/${year}`}
            items={[
              ...monthNames.map((month) => {
                const monthData = allMonth[month]; 
                if (monthData && monthData.length > 0) {
                  return { text: month }; 
                }
                return null;
              }).filter(Boolean), 

              // Handling the monthNames data if available
              ...allMonth.monthNames?.map((x: any) => ({
                text: x.name,
              })) || [],
            ]}
          />
        </div>
      </div>
      <div className="space-x-3">{children}</div>
    </div>
  );
}
