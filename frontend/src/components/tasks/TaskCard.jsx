import { CheckCircle, Trash2, Calendar, Circle } from "lucide-react"

const TaskCard = ({ task, onToggleComplete, onDelete }) => {
  const isCompleted = task.isCompleted || task.completed

  return (
    <div
      className={`group bg-white rounded-2xl p-5 border transition-all duration-300 hover:shadow-lg ${
        isCompleted ? "border-gray-100 bg-gray-50/50" : "border-gray-100 hover:border-teal-200 hover:shadow-teal-500/5"
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleComplete}
          disabled={isCompleted}
          className={`flex-shrink-0 transition-all duration-300 ${
            isCompleted ? "text-teal-500 cursor-default" : "text-gray-300 hover:text-teal-500 hover:scale-110"
          }`}
        >
          {isCompleted ? <CheckCircle size={24} /> : <Circle size={24} />}
        </button>

        <div className="flex-1 min-w-0">
          <h4
            className={`font-semibold transition-all duration-300 ${
              isCompleted ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h4>

          {task.description && (
            <p className={`text-sm mt-1 line-clamp-2 ${isCompleted ? "text-gray-300" : "text-gray-500"}`}>
              {task.description}
            </p>
          )}

          {task.dueDate && (
            <div
              className={`flex items-center gap-1.5 text-xs mt-2 ${isCompleted ? "text-gray-300" : "text-gray-400"}`}
            >
              <Calendar size={14} />
              <span>{new Date(task.dueDate).toLocaleDateString("fr-FR")}</span>
            </div>
          )}
        </div>

        <button
          onClick={onDelete}
          className="flex-shrink-0 p-2 rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}

export default TaskCard
