import { Tab } from "./tab";

export type Item = {
    text: string;
    slug?: string;
    id?: string;
    segment?: string;
    parallelRoutesKey?: string;
};

export const TabGroup = ({
    path, parallelRoutesKey, items,
}: {
    path: string;
    parallelRoutesKey?: string;
    items: Item[];
}) => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {items.map((item) => (
                <Tab key={item.text}
                    path={path}
                    item={item}
                    parallelRoutesKey={parallelRoutesKey}
                />
            ))}
        </div>
    )
}