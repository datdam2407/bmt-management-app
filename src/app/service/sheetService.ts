import { notFound } from 'next/navigation';
import 'server-only';
import { SheetData } from './sheetData';

export async function fetchAllSheetIdAndName() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_GET_ALL_SHEET,
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

// APIURL_GET_SHEET_BY_ID
export const fetchSheetData = async (id: number) => {
  const API_URL = `${process.env.NEXT_PUBLIC_DATA_BY_SHEETS_ID}?sheetId=${id}`; 

  try {
    console.log('Fetching data from:', API_URL); // Debug the URL
    const response = await fetch(API_URL);
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`Error response body: ${errorDetails}`);
      throw new Error(`HTTP error! status: ${response.status}`); 
    }

    const data = await response.json(); 
    // console.log('API response:', data); 
    return data;
  } catch (error) {
    console.error('Error fetching sheet data:', error.message); 
  }
};