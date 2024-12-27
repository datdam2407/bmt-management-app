import { fetchSheetDataWithDate } from "../../../../service/sheetService";

export default async function Layout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ dateS: string }>;
}) {
  // Await params and fetch the data with the date
  const params = await rawParams;
  console.log("dateS" , params)
  // Fetch the sheet data with the date
  const sheetDataDateByDate = await fetchSheetDataWithDate(params.dateS);
  
  console.log("Sheet sheetDataDateByDate:", sheetDataDateByDate); 

  if (!Array.isArray(sheetDataDateByDate)) {
    console.error("Expected sheetDataDateByDate to be an array but got:", sheetDataDateByDate);
    return <div>Error: Data format is incorrect</div>;
  }

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <div>Data here</div>
        </div>
      </div>
    </div>
  );
}
