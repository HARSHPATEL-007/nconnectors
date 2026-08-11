import { useState } from 'react'
import { Search, Wrench, Zap, Shield, Clock } from 'lucide-react'

const mockTools = [
  { name: 'dropbox.search_files', provider: 'dropbox', risk: 'low', latency: 450, calls: 1243, scopes: ['files.content.read'] },
  { name: 'dropbox.download_file', provider: 'dropbox', risk: 'low', latency: 800, calls: 892, scopes: ['files.content.read'] },
  { name: 'csv_converter.convert', provider: 'csv_converter', risk: 'low', latency: 2000, calls: 456, scopes: ['sandbox.execute'] },
  { name: 'n0va_sheets.import_csv', provider: 'n0va_sheets', risk: 'low', latency: 800, calls: 678, scopes: ['sheets.write'] },
  { name: 'slack.post_message', provider: 'slack', risk: 'medium', latency: 300, calls: 2341, scopes: ['chat:write'] },
  { name: 'google_drive.read', provider: 'google_drive', risk: 'low', latency: 600, calls: 1567, scopes: ['drive.readonly'] },
  { name: 'salesforce.create', provider: 'salesforce', risk: 'medium', latency: 700, calls: 345, scopes: ['api'] },
  { name: 'github.read', provider: 'github', risk: 'low', latency: 500, calls: 890, scopes: ['read:user'] },
  { name: 'meta_ads.read_campaigns', provider: 'meta_ads', risk: 'low', latency: 900, calls: 234, scopes: ['ads_read'] },
  { name: 'meta_ads.update_budget', provider: 'meta_ads', risk: 'high', latency: 600, calls: 123, scopes: ['ads_management'] },
]

export default function Tools() {
  const [query, setQuery] = useState('')
  const [selectedProvider, setSelectedProvider] = useState('all')
  const [discoverQuery, setDiscoverQuery] = useState('')
  const [discoverResults, setDiscoverResults] = useState<any[]>([])

  const providers = ['all', ...new Set(mockTools.map(t => t.provider))]
  const filtered = mockTools.filter(t => {
    const matchesQuery = !query || t.name.toLowerCase().includes(query.toLowerCase())
    const matchesProvider = selectedProvider === 'all' || t.provider === selectedProvider
    return matchesQuery && matchesProvider
  })

  const handleDiscover = () => {
    if (!discoverQuery) return
    const keywords = discoverQuery.toLowerCase().split(' ')
    const scored = mockTools.map(tool => {
      let score = 0
      keywords.forEach(kw => {
        if (tool.name.toLowerCase().includes(kw)) score += 0.3
        if (tool.provider.toLowerCase().includes(kw)) score += 0.2
      })
      return { ...tool, relevance: Math.min(score, 0.99) }
    }).filter(t => t.relevance > 0.1).sort((a, b) => b.relevance - a.relevance).slice(0, 5)

    setDiscoverResults(scored)
  }

  return (
    <div className="page">
      <header className="page-header">
        <h2>Tool Catalog & Discovery</h2>
      </header>

      <div className="discover-panel">
        <h3><Zap size={16} /> Intent-Based Tool Discovery</h3>
        <div className="discover-input">
          <input
            type="text"
            placeholder="Describe what you need... e.g., 'Find Q3 invoices and upload to sheets'"
            value={discoverQuery}
            onChange={e => setDiscoverQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleDiscover()}
          />
          <button className="btn btn-primary" onClick={handleDiscover}>
            <Search size={16} /> Discover
          </button>
        </div>
        {discoverResults.length > 0 && (
          <div className="discover-results">
            <h4>Recommended Tools ({discoverResults.length})</h4>
            {discoverResults.map(tool => (
              <div key={tool.name} className="discover-result">
                <div className="result-info">
                  <span className="result-name">{tool.name}</span>
                  <span className="result-provider">{tool.provider}</span>
                </div>
                <div className="result-meta">
                  <div className="relevance-bar">
                    <div className="relevance-fill" style={{ width: `${tool.relevance * 100}%` }}></div>
                  </div>
                  <span className="relevance-score">{(tool.relevance * 100).toFixed(0)}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="tools-toolbar">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search tools..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <select
          value={selectedProvider}
          onChange={e => setSelectedProvider(e.target.value)}
          className="filter-select"
        >
          {providers.map(p => (
            <option key={p} value={p}>{p === 'all' ? 'All Providers' : p}</option>
          ))}
        </select>
      </div>

      <div className="tools-table">
        <table>
          <thead>
            <tr>
              <th>Tool Name</th>
              <th>Provider</th>
              <th>Risk Level</th>
              <th>Latency</th>
              <th>Calls</th>
              <th>Scopes</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(tool => (
              <tr key={tool.name}>
                <td>
                  <div className="tool-name-cell">
                    <Wrench size={14} />
                    <span>{tool.name}</span>
                  </div>
                </td>
                <td><span className="provider-tag">{tool.provider}</span></td>
                <td><span className={`risk-badge risk-${tool.risk}`}>{tool.risk}</span></td>
                <td>
                  <span className="latency-cell">
                    <Clock size={12} /> {tool.latency}ms
                  </span>
                </td>
                <td>{tool.calls.toLocaleString()}</td>
                <td>
                  <div className="scopes-cell">
                    {tool.scopes.map(s => <span key={s} className="scope-tag">{s}</span>)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
