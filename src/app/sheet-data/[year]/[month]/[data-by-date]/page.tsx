import { fetchSheetDataWithDate } from "../../../../service/sheetService";
import Cell from "./cell";
import Row from "./row";
import { Player, SheetRow } from "./type";

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
    if (!Array.isArray(sheetDataDateByDate) || sheetDataDateByDate.length === 0) {
      console.warn("Warning: No data available or incorrect format:", sheetDataDateByDate);
      return <div>No data available for the selected date.</div>;
    }

    // Map data to Player instances with rounding
    const players: Player[] = sheetDataDateByDate.map((item: SheetRow) => new Player(item));

    return (
      <div className="space-y-9">
        <div>
          <div className="flex justify-between">
            <div className="overflow-x-auto">
              <div className="px-2 py-2">
                <div className="grid w-full place-content-center relative">
                  <div className="grid-rows-subgrid">
                    <table className="max-w-screen-lg text-sm text-center text-gray-500">
                      <thead className="text-gray-400 uppercase bg-black-700">
                        <tr>
                          {Object.keys(players[0]).map((header) => (
                            <Cell key={header} value={header} class="font-extrabold" />
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {players.map((player, i) => (
                          <Row player={player} key={i} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
