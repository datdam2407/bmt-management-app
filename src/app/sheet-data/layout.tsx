// // import React from "react"
// // import { fetchAllSheetIdAndName } from "../service/sheetService";
// // import { TabGroup } from "../../ui/tab-group";

// // export default async function Layout({ children, }: { children: React.ReactNode }) {
// //     const sheeetIds = await fetchAllSheetIdAndName();
// //     return (
// //         <div className="space-y-9">
// //             <div className="flex justify-bettween">
// //                 <TabGroup
// //                     path="/sheet-data"
// //                     items={[
// //                         {
// //                             text: 'Home',
// //                         },
// //                         ...sheeetIds.map((x) => ({
// //                             text: x.name,
// //                             slug: x.slug,
// //                             id: x.id
// //                         })),
// //                     ]}
// //                 />
// //             </div>
// //             <div>{children}</div>

// //         </div>
// //     )
// // }

// import React from "react";
// import { fetchAllSheetIdAndName } from "../service/sheetService";
// import { TabGroup } from "../../ui/tab-group";

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const sheetIds = await fetchAllSheetIdAndName();

//   return (
//     <div className="space-y-9">
//       <div className="flex justify-between">
//         <TabGroup
//           path="/sheet-data"
//           items={[
//             { text: "Home" },
//             ...sheetIds.map((sheet) => ({
//               text: sheet.name,
//               id: sheet.id,
//               slug: sheet.slug,
//             })),
//           ]}
//         />
//       </div>
//       <div>{children}</div>
//     </div>
//   );
// }

import React from "react";
import { fetchAllSheetIdAndName } from "../service/sheetService";
import { TabGroup } from "../../ui/tab-group";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const sheetIds = await fetchAllSheetIdAndName();

    return (
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/sheet-data"
            items={[
              { text: "Home" },
              ...sheetIds.map((sheet) => ({
                text: sheet.name,
                id: sheet.id,
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
