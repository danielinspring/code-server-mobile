import { Settings } from 'lucide-react';

export function SettingsView() {
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

export const SettingsPlugin = {
  id: 'settings',
  label: 'Settings',
  icon: <Settings size={24} />,
  component: SettingsView
};
