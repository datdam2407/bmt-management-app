"use client";
import clsx from "clsx";
import Link from "next/link";
import { Item } from "./tab-group";
import { useSelectedLayoutSegment } from "next/navigation";

export const Tab = (
    { path, parallelRoutesKey, item }: {
        path: string;
        parallelRoutesKey?: string;
        item: Item;
    }) => {
    const segment = useSelectedLayoutSegment(parallelRoutesKey)
    const href = item.text ? path + '/' + item.text : path;
    console.log("href", href)
    const isActive = (!item.text && segment === null) || segment === item.segment || segment === item.text;

    return (
        <Link
            href={href}
            className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
                    !isActive,
                'bg-vercel-blue text-white': isActive,
            })}
        >
            {item.text}
        </Link>
    )
}