"use client";

import { useEffect, useState } from "react";
import { TabGroup } from "../../../../ui/tab-group";
import { fetchDataWithMonth } from "../../../service/sheetService";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Layout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ month: string; year: string; id: string }>;
}) {
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [sheetDataWithMonth, setSheetDataWithMonth] = useState<any[]>([]); // Store the fetched data
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = await rawParams; // Resolve params
        const data = await fetchDataWithMonth(params.year , params.month); // Fetch the data for the given month
        console.log(data)
        setMonth(params.month);
        setYear(params.year);
        if (!Array.isArray(data)) {
          console.error("Expected sheetDataWithMonth to be an array but got:", data);
          return;
        }
        setSheetDataWithMonth(data); // Set the fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData(); // Fetch data on mount
  }, [rawParams]); //
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/949fd376-6d56-46fa-b2f7-f22c313bba88/7nxd0fjtS9.lottie"
          loop
          autoplay
          speed={1.5} // Adjust the speed as per your preference
          className="w-full h-[200px] flex justify-center items-center"
        />
      </div>
    );
  }
  
  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/sheet-data/${year}/${month}`}
            items={[

              ...sheetDataWithMonth.map((x) => ({
                text: x.name,
              })),
            ]}
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

