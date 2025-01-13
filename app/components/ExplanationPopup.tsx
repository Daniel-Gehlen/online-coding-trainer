import React from 'react'
import { BookOpen } from 'lucide-react'

interface ExplanationPopupProps {
  explanation: string
}

const ExplanationPopup: React.FC<ExplanationPopupProps> = ({ explanation }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white border-4 border-purple-500 rounded-lg shadow-lg p-4 max-w-md animate-fadeIn">
      <h3 className="text-lg font-semibold mb-2 text-purple-600 flex items-center">
        <BookOpen className="w-5 h-5 mr-2" />
        Explicação:
      </h3>
      <p className="text-gray-700">{explanation}</p>
      <div className="mt-2 text-sm text-gray-500">Dica: Continue explorando para aprender mais em programação!</div>
    </div>
  )
}

export default ExplanationPopup

