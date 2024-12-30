"use client"
import { useState, useEffect } from "react";
import { TabGroup } from "../../ui/tab-group";
import { fetchAllYearBySheetData } from "../service/sheetService";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Import DotLottieReact

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [AllYears, setAllYears] = useState<any[]>([]); // State to store years data
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const yearsData = await fetchAllYearBySheetData();
        setAllYears(yearsData); // Set fetched data to state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error in Layout:", error);
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchData(); // Trigger data fetching
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    // Display a loading animation while data is being fetched
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/949fd376-6d56-46fa-b2f7-f22c313bba88/7nxd0fjtS9.lottie"
          loop
          autoplay
          speed={1.5} // You can adjust the speed if necessary
          className="w-full h-[200px] flex justify-center items-center"
        />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <TabGroup
          path="/sheet-data"
          items={[
            ...AllYears.map((yearObj) => ({
              text: yearObj.year, // Ensure year is converted to string
            })),
          ]}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
