'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { CounterProvider } from '../context/counterContext';
import { Provider } from 'react-redux';
import store from '../store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <CounterProvider>{children}</CounterProvider>
        </Provider>
      </body>
    </html>
  );
}
