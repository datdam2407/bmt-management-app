'use client';
import React, { useEffect, useState } from "react";
import { fetchSheetData } from "../app/service/sheetService";

const FetchSheetData = ({ sheetId }) => {
  const [sheetData, setSheetData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sheetId) {
      setError('Sheet ID is missing.');
      setSheetData(null);
      return;
    }

    setError(null);
    setLoading(true);

    const loadData = async () => {
      try {
        const data = await fetchSheetData(sheetId);
        setSheetData(data);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setSheetData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [sheetId]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (!sheetData) return <p>No data available.</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Debit T11</th>
            <th>Debit T12</th>
            <th>Prepaid</th>
            <th>Badminton</th>
            <th>Need to Pay</th>
          </tr>
        </thead>
        <tbody>
          {sheetData.map((item, index) => (
            <tr key={index}>
              <td>{item["Name"]}</td>
              <td>{item["Attendance"]}</td>
              <td>{item["Debit T11"] || ""}</td>
              <td>{item["Debit T12"] || ""}</td>
              <td>{item["Prepaid"] || ""}</td>
              <td>{item["Badminton"] || ""}</td>
              <td>{item["Need to Pay"] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchSheetData;
