import { Routes, Route } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Chat from './screens/Chat'
import MindMap from './screens/MindMap'
import Checklist from './screens/Checklist'
import Settings from './screens/Settings'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="chat" element={<Chat />} />
        <Route path="mindmap" element={<MindMap />} />
        <Route path="checklist" element={<Checklist />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
