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
  console.log(AllYears)
    return (
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/sheet-data"
            items={[
              { text: "Home" },
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