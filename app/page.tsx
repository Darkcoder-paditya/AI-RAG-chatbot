"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hello');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to backend');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Django + Next.js App
        </h1>
        <div className="text-lg text-center sm:text-left">
          Backend Response: <span className="font-semibold text-blue-500">{message || 'Loading...'}</span>
        </div>
      </main>
    </div>
  );
}
