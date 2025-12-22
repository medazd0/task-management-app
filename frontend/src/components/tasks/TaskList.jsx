import { ListTodo, Inbox } from "lucide-react"
import TaskCard from "./TaskCard"
import LoadingSpinner from "../common/LoadingSpinner"

const TaskList = ({ tasks, loading, onToggleComplete, onDelete }) => {
  if (loading) {
    return <LoadingSpinner text="Chargement des taches..." />
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Inbox size={32} className="text-gray-300" />
        </div>
        <p className="text-gray-400 text-lg font-medium">Aucune tache</p>
        <p className="text-gray-300 text-sm mt-1">Ajoutez votre premiere tache ci-dessus</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
          <ListTodo size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Liste des taches</h3>
          <p className="text-sm text-gray-400">
            {tasks.length} tache{tasks.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={() => onToggleComplete(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
