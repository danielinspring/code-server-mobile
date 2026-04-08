import { useState } from 'react'
import { Activity, Edit3, Settings } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('status')

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-10 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Agent Lab</h1>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
          AL
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 pb-20">
        {activeTab === 'status' && <AgentStatusView />}
        {activeTab === 'prompt' && <PromptEditorView />}
        {activeTab === 'settings' && <SettingsView />}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full pb-safe">
        <div className="flex justify-around items-center h-16">
          <NavItem
            icon={<Activity size={24} />}
            label="Status"
            isActive={activeTab === 'status'}
            onClick={() => setActiveTab('status')}
          />
          <NavItem
            icon={<Edit3 size={24} />}
            label="Prompt"
            isActive={activeTab === 'prompt'}
            onClick={() => setActiveTab('prompt')}
          />
          <NavItem
            icon={<Settings size={24} />}
            label="Settings"
            isActive={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
          />
        </div>
      </nav>
    </div>
  )
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
        isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}

function AgentStatusView() {
  const mockAgents = [
    { id: 1, name: 'Critique Agent', status: 'Running', time: '2m ago' },
    { id: 2, name: 'Solution Pool Agent', status: 'Idle', time: '15m ago' },
    { id: 3, name: 'Correction Agent', status: 'Error', time: '1h ago' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Agent Status</h2>
      <div className="grid grid-cols-1 gap-3">
        {mockAgents.map(agent => (
          <div key={agent.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-800">{agent.name}</h3>
              <p className="text-xs text-gray-500 mt-1">Last active: {agent.time}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              agent.status === 'Running' ? 'bg-green-100 text-green-700' :
              agent.status === 'Idle' ? 'bg-gray-100 text-gray-700' :
              'bg-red-100 text-red-700'
            }`}>
              {agent.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PromptEditorView() {
  const [prompt, setPrompt] = useState('You are an expert software engineer...\n\nAnalyze the following code and provide a critique.')

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Quick Prompt Editor</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700">
          Save
        </button>
      </div>
      <div className="flex-1">
        <textarea
          className="w-full h-full min-h-[300px] p-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt here..."
        />
      </div>
      <p className="text-xs text-gray-500 text-center">Modifications sync to SurrealDB directly.</p>
    </div>
  )
}

function SettingsView() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Settings</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="font-medium text-gray-800">LiteLLM Gateway</h3>
            <p className="text-xs text-gray-500">http://litellm:4000</p>
          </div>
          <button className="text-blue-600 text-sm font-medium">Edit</button>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="font-medium text-gray-800">SurrealDB Endpoint</h3>
            <p className="text-xs text-gray-500">ws://surrealdb:8000/rpc</p>
          </div>
          <button className="text-blue-600 text-sm font-medium">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default App
