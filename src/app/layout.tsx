import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { StrictMode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatBot Maker',
  description:
    'A simple app, based on chat-gpt and supabase that allows you to create your own chatbot by providing chat-gpt with your own data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: 'hidden', // remove sign up link in the login page
        },
      }}
    >
      <StrictMode>
        <html lang="en" className="h-full bg-white">
          <body className="h-full" suppressHydrationWarning={true}>
            {children}
          </body>
        </html>
      </StrictMode>
    </ClerkProvider>
  )
}
