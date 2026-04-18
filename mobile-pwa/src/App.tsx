import React, { useState } from 'react'
import { StatusPlugin } from './plugins/StatusPlugin'
import { PromptPlugin } from './plugins/PromptPlugin'
import { SettingsPlugin } from './plugins/SettingsPlugin'

// Plugin Registry
const PLUGINS = [
  StatusPlugin,
  PromptPlugin,
  SettingsPlugin
]

function App() {
  const [activeTab, setActiveTab] = useState(PLUGINS[0].id)

  const ActiveComponent = PLUGINS.find(p => p.id === activeTab)?.component || (() => <div>Plugin not found</div>)

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
        <ActiveComponent />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full pb-safe">
        <div className="flex justify-around items-center h-16">
          {PLUGINS.map(plugin => (
            <NavItem
              key={plugin.id}
              icon={plugin.icon}
              label={plugin.label}
              isActive={activeTab === plugin.id}
              onClick={() => setActiveTab(plugin.id)}
            />
          ))}
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

export default App
