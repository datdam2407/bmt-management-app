// import { TabGroup } from "../../../ui/tab-group";
// import { fetchSheetData } from "../../service/sheetService";

// export default async function Layout(props: {
//   children: React.ReactNode;
//   params: Promise<{ sheetID: string }>;
// }) {
//   const params = await props.params;
//   const sheetData = await fetchSheetData(Number(params.sheetID));
//   console.log("params.name")
//   return (
//     <div className="space-y-9">
//       <div>
//         <div className="flex justify-between">
//           <TabGroup
//             path={`sheet-data/${params.name}`}
//             items={[
//               {
//                 text: 'All',
//               },
//               sheetData.map((x) => ({
//                 text: x.name,
                
//               })),
//             ]}
//           />

//         </div>
//       </div>

//     </div>
//   );
// }
import { TabGroup } from "../../../ui/tab-group";
import { fetchSheetData } from "../../service/sheetService";

export default async function Layout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ sheetID: string }>;
}) {
  try {
    // Await params to get the actual values
    const params = await rawParams;

    // Fetch sheet data using the awaited sheetID
    const sheetData = await fetchSheetData(Number(params.sheetID));

    // Ensure sheetData exists
    if (!sheetData) {
      throw new Error("No data found for the specified sheet ID.");
    }

    return (
      <div className="space-y-9">
        <div>
        </div>
        <div>{children}</div>
      </div>
    );
  } catch (error) {
    console.error("Error in Layout:", error);

    // Fallback UI in case of an error
    return <div>Error loading sheet data</div>;
  }
}
