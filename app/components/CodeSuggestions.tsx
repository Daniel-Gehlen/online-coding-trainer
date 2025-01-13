import React from 'react'
import { Lightbulb } from 'lucide-react'

interface CodeSuggestionsProps {
  suggestions: string[]
  onSuggestionClick: (suggestion: string) => void
  position: { lineNumber: number; column: number }
}

const CodeSuggestions: React.FC<CodeSuggestionsProps> = ({ suggestions, onSuggestionClick, position }) => {
  return (
    <div
      className="absolute bg-white border-2 border-yellow-400 rounded-lg shadow-lg overflow-hidden"
      style={{
        top: `${position.lineNumber * 20}px`,
        left: `${position.column * 9}px`,
      }}
    >
      <ul className="py-1">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-yellow-100 cursor-pointer text-sm font-medium text-gray-700 transition-colors duration-150"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
      <div className="bg-yellow-100 p-2 text-xs text-yellow-600 flex items-center">
        <Lightbulb className="w-4 h-4 mr-1" />
        Sugestão?
      </div>
    </div>
  )
}

export default CodeSuggestions

