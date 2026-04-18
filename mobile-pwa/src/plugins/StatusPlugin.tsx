import { Activity } from 'lucide-react';

export function AgentStatusView() {
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

export const StatusPlugin = {
  id: 'status',
  label: 'Status',
  icon: <Activity size={24} />,
  component: AgentStatusView
};
