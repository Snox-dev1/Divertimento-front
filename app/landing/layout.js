'use client';
import '../../styles/globals.css';
import { useState, useEffect } from 'react';
import Seo from '../../components/Seo';
export default function RootLayout({ children }) {
  // check if the page is full loaded and the font is loaded
  const [Loaded, setLoaded] = useState(false);
  const [LoadedFinish, setLoadedFinish] = useState(false);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoadedFinish(true);
    }, 2100);
  }, []);

  return (
    <>
      <Seo />
      <html lang="fr">
        <body className="bg-background  text-white">{children}</body>
      </html>
    </>
  );
}
