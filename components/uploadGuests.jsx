'use client'

import { postGuests } from '@/app/api';
import * as XLSX from 'xlsx/xlsx.mjs';

import { useState } from 'react';

export default function InsertGuestsForm() {
  const [fileData, setFileData] = useState(null);

  console.log(fileData)

  // Function to parse Excel file and return data
  const parseExcel = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0]; // Assuming we're parsing the first sheet
          const worksheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(worksheet);
          resolve(parsedData);
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsBinaryString(file);
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const parsedData = await parseExcel(file);
      setFileData(parsedData);
    } catch (error) {
      console.error('Error parsing file:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = fileData.map(row => ({ name: row.Name, guestlist: row.Guestlist }));

    try {
      const response = await postGuests(values)
      if (response.ok) {
        console.log('Guests inserted successfully');
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to insert guests:', response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error inserting guests:', error.message);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <input type="file" onChange={handleFileUpload} />

      {fileData && <form onSubmit={handleSubmit}>
        <button type="submit">Insert Guests</button>
      </form>}
    </div>
  );
}