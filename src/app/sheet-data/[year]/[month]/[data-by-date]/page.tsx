import { fetchSheetDataWithDate } from "../../../../service/sheetService";

export default async function Page({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ "data-by-date": string; year: string; month: string }>;
}) {
  try {
    // Await params and extract the "data-by-date" key
    const params = await rawParams;
    // Fetch the sheet data for the given "data-by-date"
    const sheetDataDateByDate = await fetchSheetDataWithDate(params["data-by-date"]);
    // Validate that the fetched data is an array
    if (!Array.isArray(sheetDataDateByDate)) {
      console.error("Error: Expected an array but got:", sheetDataDateByDate);
      return <div>Error: Data format is incorrect</div>;
    }

    return (
      <div className="space-y-9">
        <div>
          <div className="flex justify-between">
            {sheetDataDateByDate.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full min-w-max">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Name</th>
                      <th className="border border-gray-300 px-2 py-2">Attendance</th>
                      <th className="border border-gray-300 px-2 py-2">Prev Month</th>
                      <th className="border border-gray-300 px-2 py-2">This Month</th>
                      <th className="border border-gray-300 px-2 py-2">Prepaid</th>
                      <th className="border border-gray-300 px-2 py-2">Badminton</th>
                      <th className="border border-gray-300 px-4 py-2">Need to Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sheetDataDateByDate.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{item.Name}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.Attendance}</td>
                        <td className="border border-gray-300 px-4 py-2">{item["Prev Month"]}</td>
                        <td className="border border-gray-300 px-4 py-2">{item["This Month"]}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.Prepaid}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.Badminton}</td>
                        <td className="border border-gray-300 px-4 py-2">{item["Need to Pay"] ? Math.round(item["Need to Pay"]) : "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>No data available for the selected date.</div>
            )}
          </div>
        </div>
        <div>{children}</div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching sheet data by date:", error);
    return <div>Error: Unable to load data</div>;
  }
}