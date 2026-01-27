import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { profileConfig } from './config/profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme } = useTheme()
  const { name, tagline, skills } = profileConfig

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 'var(--space-md)' }}>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      
      <div className="badge">Phase 2: Data Layer Active</div>
      <h1>{name}</h1>
      <p className="text-secondary">{tagline}</p>

      <div className="card">
        <h3>Skills Overview</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
          {skills.slice(0, 3).map(skill => (
            <span key={skill.category} className="badge" style={{ marginBottom: 0 }}>
              {skill.icon} {skill.category}
            </span>
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <button 
            className="btn-primary" 
            onClick={() => setCount((count) => count + 1)}
          >
            Interaction Test: {count}
          </button>
        </div>
      </div>

      <p className="text-secondary" style={{ fontSize: 'var(--text-sm)' }}>
        Current Theme: <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{theme.toUpperCase()}</span>
      </p>
    </div>
  )
}

export default App
