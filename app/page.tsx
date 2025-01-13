'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import CodeSuggestions from './components/CodeSuggestions'
import ExplanationPopup from './components/ExplanationPopup'
import { getExplanation, getSuggestions, codeExamples } from './utils/codeHelpers'
import { Sparkles, Code, Wand2 } from 'lucide-react'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

export default function Home() {
  const [code, setCode] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ lineNumber: 1, column: 1 })
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [explanation, setExplanation] = useState('')
  const [selectedExample, setSelectedExample] = useState('')

  useEffect(() => {
    const lastWord = code.split(/\s+/).pop() || ''
    if (lastWord.length > 0) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }

    const newExplanation = getExplanation(lastWord)
    if (newExplanation) {
      setExplanation(newExplanation)
      setShowExplanation(true)
    } else {
      setShowExplanation(false)
    }
  }, [code])

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value)
    }
  }

  const handleEditorDidMount = (editor: any) => {
    editor.onDidChangeCursorPosition((e: any) => {
      setCursorPosition(e.position)
    })
  }

  const handleSuggestionClick = (suggestion: string) => {
    const words = code.split(/\s+/)
    words.pop()
    words.push(suggestion)
    setCode(words.join(' ') + ' ')
    setShowSuggestions(false)
  }

  const handleExampleSelect = (example: string) => {
    setSelectedExample(example)
    setCode(codeExamples[example].code)
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">
        <Sparkles className="inline-block mr-2" />
        Treinador de Codificação
      </h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">
          <Wand2 className="inline-block mr-2" />
          Escolha uma estrutura ou partícula de código:
        </h2>
        <Select onValueChange={handleExampleSelect} value={selectedExample}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um exemplo" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(codeExamples).map((example) => (
              <SelectItem key={example} value={example}>
                {example}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="relative mb-6">
        <div className="absolute top-2 left-2 z-10">
          <Code className="text-gray-400" />
        </div>
        <MonacoEditor
          height="400px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
          }}
        />
        {showSuggestions && (
          <CodeSuggestions
            suggestions={getSuggestions(code.split(/\s+/).pop() || '')}
            onSuggestionClick={handleSuggestionClick}
            position={cursorPosition}
          />
        )}
      </div>
      <div className="flex justify-center">
        <Button onClick={() => setCode('')} className="bg-red-500 hover:bg-red-600 text-white">
          Limpar Código
        </Button>
      </div>
      {showExplanation && <ExplanationPopup explanation={explanation} />}
    </div>
  )
}

