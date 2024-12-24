import React from "react"
import { fetchAllSheetIdAndName } from "../service/sheetService";
import { TabGroup } from "../../ui/tab-group";

export default async function Layout({ children, }: { children: React.ReactNode }) {
    const sheeetIds = await fetchAllSheetIdAndName();
    return (
        <div className="space-y-9">
            <div className="flex justify-bettween">
                <TabGroup
                    path="/error-handling"
                    items={[
                        {
                            text: 'Home',
                        },
                        ...sheeetIds.map((x) => ({
                            text: x.name,
                            slug: x.slug,
                        })),
                    ]}
                />
            </div>
            <div>{children}</div>

        </div>
    )
}