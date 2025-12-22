import { BarChart3, TrendingUp } from "lucide-react"

const ProgressBar = ({ completedTasks, totalTasks, percentage }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
          <BarChart3 className="text-white" size={24} />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-500">
              {completedTasks} / {totalTasks} taches completees
            </p>
            <div className="flex items-center gap-1 text-teal-600">
              <TrendingUp size={16} />
              <span className="text-sm font-bold">{percentage.toFixed(0)}%</span>
            </div>
          </div>

          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${percentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
