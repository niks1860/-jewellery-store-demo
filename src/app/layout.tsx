import { PropsWithChildren } from 'react';

import './index.css'

export default async function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className='min-h-screen bg-gray-200'>
        {children}
      </body>
    </html>
  )
}