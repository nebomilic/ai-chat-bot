'use client'

import { useCompletion } from 'ai/react'
import Linkify from 'linkify-react'
export default function Chat() {
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: '/api/chat',
    })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ask anything about the text you entered..."
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <div className="mt-6">
        {completion && (
          <div className="mt-2">
            <Linkify as="p" className="chat" options={{ target: '_blank' }}>
              {completion}
            </Linkify>
          </div>
        )}

        {isLoading && !completion && (
          <p className="flex items-center justify-center mt-4">
            <svg
              className="animate-spin -ml-1 mr-3 h-8 w-8 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-90"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </p>
        )}
      </div>
    </div>
  )
}
