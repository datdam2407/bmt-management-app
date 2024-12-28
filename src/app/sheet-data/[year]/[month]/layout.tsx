import { TabGroup } from "../../../../ui/tab-group";
import { fetchDataWithMonth } from "../../../service/sheetService";

export default async function Layout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ month: string, year: string, id: string }>;
}) {
  // Await params and fetch the data with the month
  const params = await rawParams;
  
  // Fetch the sheet data with the month
  const sheetDataWithMonth = await fetchDataWithMonth(params.month);
  if (!Array.isArray(sheetDataWithMonth)) {
    console.error("Expected sheetDataWithMonth to be an array but got:", sheetDataWithMonth);
    return <div>Error: Data format is incorrect</div>;
  }

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/sheet-data/${params.year}/${params.month}`}
            items={[
      
              ...sheetDataWithMonth.map((x) => ({
                text: x.name, 
                path: `/sheet-data/${params.year}/${params.month}/${x.id}`,  // Include the id in the path
              })),
            ]}
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

