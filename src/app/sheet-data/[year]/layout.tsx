import { TabGroup } from "../../../ui/tab-group";
import { fetchSheetWithYear } from "../../service/sheetService";

export default async function Layout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ year: string }>;
}) {
  // Await the params once and fetch sheet data
  const params = await rawParams;

  // Fetch sheet data using the awaited year
  const sheetData = await fetchSheetWithYear(params.year);

  // Define the month names in an array for consistent handling
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/sheet-data/${params.year}`}
            items={[
 
              // Loop through all months (January to December)
              ...monthNames.map((month) => {
                // Check if there is data for the month
                const monthData = sheetData[month];
                if (monthData && monthData.length > 0) {
                  return {
                    text: month, // Display the month name if it has data
                  };
                }
                // If no data exists for the month, skip adding it to the tabs
                return null;
              }).filter(Boolean), // Remove null entries for months with no data

              // Handling December with specific data (if needed)
              ...sheetData.monthNames?.map((x) => ({
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