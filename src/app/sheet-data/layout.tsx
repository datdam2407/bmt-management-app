import { TabGroup } from "../../ui/tab-group";
import { fetchAllYearBySheetData } from "../service/sheetService";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    // Fetch all year data
    const AllYears = await fetchAllYearBySheetData();
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
  } catch (error) {
    console.error("Error in Layout:", error);
    return <div>Error loading sheet data</div>;
  }
}  