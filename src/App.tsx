import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 'var(--space-md)' }}>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      
      <div className="badge">Theme Preview</div>
      <h1>Allan Kibuthi Portfolio</h1>
      <p className="text-secondary">
        Testing the "Green & Dark" design system integration.
      </p>

      <div className="card">
        <h3>Interactive Component</h3>
        <p className="text-secondary">
          Click the button below to see the primary action style and transitions.
        </p>
        <button 
          className="btn-primary" 
          onClick={() => setCount((count) => count + 1)}
        >
          Increment Counter: {count}
        </button>
      </div>

      <p className="text-secondary" style={{ fontSize: 'var(--text-sm)' }}>
        Current Theme: <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{theme.toUpperCase()}</span>
      </p>
    </div>
  )
}

export default App
