'use client';
import React, { useEffect, useState } from "react";
import { fetchAllSheetIdAndName } from "../app/service/sheetService";

const FetchAllSheetID = () => {
  const [sheetDataSheetID, setSheetDataSheetID] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);

    const loadData = async () => {
      try {
        const data = await fetchAllSheetIdAndName();
        setSheetDataSheetID(data);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setSheetDataSheetID(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (!sheetDataSheetID) return <p>No data available.</p>;

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>sheetID</th>
        </tr>
      </thead>
      <tbody>
        {sheetDataSheetID.map((item, index) => (
          <tr key={index}>
            <td>{item["name"]}</td>
            <td>{item["id"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default FetchAllSheetID;
