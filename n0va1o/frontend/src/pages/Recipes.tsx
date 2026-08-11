import { useState } from 'react'
import { BookOpen, Play, Clock, CheckCircle, XCircle, Zap } from 'lucide-react'

const mockRecipes = [
  { id: 'rec_001', name: 'Monthly_Invoice_Sync', status: 'active', executions: 45, successRate: 0.98, latency: 85, version: '1.2.0', schedule: '0 9 1 * *' },
  { id: 'rec_002', name: 'Campaign_Performance_Report', status: 'active', executions: 128, successRate: 0.95, latency: 120, version: '2.0.1', schedule: '0 8 * * 1' },
  { id: 'rec_003', name: 'CRM_Lead_Sync', status: 'paused', executions: 67, successRate: 0.92, latency: 200, version: '1.0.3', schedule: 'manual' },
  { id: 'rec_004', name: 'GitHub_PR_Review_Pipeline', status: 'active', executions: 234, successRate: 0.97, latency: 500, version: '3.1.0', schedule: 'webhook' },
]

export default function Recipes() {
  const [recipes] = useState(mockRecipes)

  return (
    <div className="page">
      <header className="page-header">
        <h2>Recipe Compiler</h2>
        <p className="subtitle">Compiled workflows bypassing LLM inference for deterministic, high-speed execution</p>
      </header>

      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className={`recipe-card status-${recipe.status}`}>
            <div className="recipe-header">
              <BookOpen size={18} />
              <div>
                <h3>{recipe.name}</h3>
                <code className="recipe-id">{recipe.id}</code>
              </div>
              <span className={`badge badge-${recipe.status}`}>{recipe.status}</span>
            </div>
            <div className="recipe-stats">
              <div className="recipe-stat">
                <Zap size={14} />
                <span>{recipe.latency}ms p99</span>
              </div>
              <div className="recipe-stat">
                <CheckCircle size={14} />
                <span>{(recipe.successRate * 100).toFixed(0)}% success</span>
              </div>
              <div className="recipe-stat">
                <Clock size={14} />
                <span>{recipe.executions} runs</span>
              </div>
            </div>
            <div className="recipe-meta">
              <span>Version: {recipe.version}</span>
              <span>Schedule: <code>{recipe.schedule}</code></span>
            </div>
            <div className="recipe-actions">
              <button className="btn btn-sm btn-primary"><Play size={14} /> Execute</button>
              <button className="btn btn-sm btn-secondary">View Graph</button>
              <button className="btn btn-sm btn-danger"><XCircle size={14} /> Pause</button>
            </div>
          </div>
        ))}
      </div>

      <div className="compilation-info">
        <h3>How Recipe Compilation Works</h3>
        <div className="compile-steps">
          <div className="compile-step">
            <div className="step-number">1</div>
            <h4>Exploratory Phase</h4>
            <p>Agent discovers optimal multi-app workflow path through trial and error</p>
          </div>
          <div className="compile-step">
            <div className="step-number">2</div>
            <h4>Capture Phase</h4>
            <p>Successful call graph is captured as a deterministic sequence</p>
          </div>
          <div className="compile-step">
            <div className="step-number">3</div>
            <h4>Compilation Phase</h4>
            <p>Call graph compiled to type-safe Pydantic schema with error handling</p>
          </div>
          <div className="compile-step">
            <div className="step-number">4</div>
            <h4>Production Phase</h4>
            <p>Compiled recipe executes as high-speed API bypassing LLM entirely</p>
          </div>
        </div>
      </div>
    </div>
  )
}
