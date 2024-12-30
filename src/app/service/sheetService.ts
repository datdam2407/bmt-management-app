import { notFound } from 'next/navigation';
// import 'server-only';
import { SheetDataIdAndName, YearData } from './sheetData';

export async function fetchAllSheetIdAndName() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_GET_ALL_SHEET_ID_AND_NAME,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    const errorDetails = await res.text();
    console.error(`Error response body: ${errorDetails}`);
    throw new Error("Something went wrong!");
  }

  // Parse the response body only once
  const data = (await res.json()) as SheetDataIdAndName[];

  // Log the parsed data instead of attempting to re-parse
  if (data.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return data;
}

export async function fetchDataWithLatestDate() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DATA_BY_LATEST_DATE,
  );

  if (!res.ok) {
    const errorDetails = await res.text();
    console.error(`Error response body: ${errorDetails}`);
    throw new Error("Something went wrong!");
  }

  // Parse the response body only once
  const data = await res.json()

  // Log the parsed data instead of attempting to re-parse
  if (data.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return data;
}


//API get all years by sheet data
export async function fetchAllYearBySheetData() {
    const res = await fetch(process.env.NEXT_PUBLIC_GET_SHEET_WITH_ALL_YEARS,);
    if(!res.ok){
      const errorDetails = await res.text();
      console.error(`Error response body: ${errorDetails}`);
      throw new Error("Something went wrong!");
    }
    const data = (await res.json()) as YearData[];
    if(data.length === 0){
      notFound();
    }
    return data;
  }

//API get month by years
export const fetchSheetWithYear = async (year: string) => {
  const API_URL = `${process.env.NEXT_PUBLIC_GET_SHEET_WITH_YEAR}${year}`;
  try{
    const res = await fetch(API_URL);
      if (!res.ok){
        const errorDetails = await res.text();
        console.error(`Error response body: ${errorDetails}`);
        throw new Error(`HTTP error! status: ${res.status}`); 
      }
      const data = await res.json()
      return data;
    }catch(err){
      console.error('Error fetching sheet data:', err.message); 

    }
}

//API get data sheet by month
export const fetchDataWithMonth = async (year: string, month: string) => {
  const API_URL = `${process.env.NEXT_PUBLIC_GET_SHEET_WITH_MONTH}?year=${year}&&month=${month}`; // Fixed URL formatting
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      const errorDetails = await res.text();
      console.error(`Error response body: ${errorDetails}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching sheet data:', err.message);
  }
}



// APIURL_GET_SHEET_BY_ID
export const fetchSheetDataWithDate = async (name: string) => {
  const API_URL = `${process.env.NEXT_PUBLIC_DATA_BY_SHEET_NAME}${name}`; 

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`Error response body: ${errorDetails}`);
      throw new Error(`HTTP error! status: ${response.status}`); 
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching sheet data:', error.message); 
  }
};