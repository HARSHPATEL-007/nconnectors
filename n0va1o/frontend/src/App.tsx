import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Agents from './pages/Agents'
import Tools from './pages/Tools'
import Sessions from './pages/Sessions'
import Recipes from './pages/Recipes'
import Connections from './pages/Connections'
import Audit from './pages/Audit'
import Interrogation from './pages/Interrogation'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/interrogation" element={<Interrogation />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}
