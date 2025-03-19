import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'

function CodeEditor() {
  return (
    <div>
        <Sandpack template='react'
        files={{
            "/App.js": `export default function App() {
            return <h1>Hello, World!</h1>
        }`
        }}
        />
    </div>
  )
}

export default CodeEditor