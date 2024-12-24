import { notFound } from 'next/navigation';
import 'server-only';
import { SheetData } from './sheetData';

export async function fetchAllSheetIdAndName() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_GET_ALL_SHEET
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    const errorDetails = await res.text();
        console.error(`Error response body: ${errorDetails}`);
    throw new Error('Something went wrong!');
  }
  const data = (await res.json()) as SheetData[];
    console.log("fetchAllSheetIdAndName", res.json())

  if (data.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return data;
}