// src/services/sheetService.js

// APIURL_GETALL_SHEET
export const fetchAllSheetIdAndName = async () =>{
  const API_URL_GET_ALL_SHEET = process.env.NEXT_PUBLIC_GET_ALL_SHEET
  try{
    const response = await fetch(API_URL_GET_ALL_SHEET)
    if(!response.ok){
      const errorDetails = await response.text();
      console.error(`Error response body: ${errorDetails}`);
    }
    const data = await response.json()
    console.log("fetchAllSheetIdAndName", data)
    return data;
  }
  catch(e){
    console.error('Error fetching sheet data:', e.message); 
  }
}

// APIURL_GET_SHEET_BY_ID
export const fetchSheetData = async (sheetID) => {
  const API_URL = `${process.env.NEXT_PUBLIC_DATA_BY_SHEETS_ID}?sheetId=${sheetID}`; 

  try {
    console.log('Fetching data from:', API_URL); // Debug the URL
    const response = await fetch(API_URL);

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`Error response body: ${errorDetails}`);
      throw new Error(`HTTP error! status: ${response.status}`); 
    }

    const data = await response.json(); 
    console.log('API response:', data); 
    return data;
  } catch (error) {
    console.error('Error fetching sheet data:', error.message); 
  }
};
