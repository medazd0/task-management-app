import { useState, useEffect } from "react"
import { ArrowLeft, FileText } from "lucide-react"
import TaskForm from "../tasks/TaskForm"
import TaskList from "../tasks/TaskList"
import ProgressBar from "../tasks/ProgressBar"
import { taskService } from "../../services/taskService"
import { projectService } from "../../services/projectService"

const ProjectDetails = ({ project, onBack }) => {
  const [tasks, setTasks] = useState([])
  const [progress, setProgress] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjectData()
  }, [project.id])

  const loadProjectData = async () => {
    try {
      const [tasksData, progressData] = await Promise.all([
        taskService.getAll(project.id),
        projectService.getProgress(project.id),
      ])
      setTasks(tasksData)
      setProgress(progressData)
    } catch (error) {
      console.error("Erreur:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleTaskCreated = async (newTask) => {
    setTasks([...tasks, newTask])
    const progressData = await projectService.getProgress(project.id)
    setProgress(progressData)
  }

  const handleToggleComplete = async (taskId) => {
    try {
      const updatedTask = await taskService.toggleComplete(project.id, taskId)
      setTasks(tasks.map((t) => (t.id === taskId ? updatedTask : t)))
      const progressData = await projectService.getProgress(project.id)
      setProgress(progressData)
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche?")) return
    try {
      await taskService.delete(project.id, taskId)
      setTasks(tasks.filter((t) => t.id !== taskId))
      const progressData = await projectService.getProgress(project.id)
      setProgress(progressData)
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-3 border-teal-200 rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-3 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-gray-400 text-sm">Chargement du projet...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="group inline-flex items-center gap-2 text-gray-500 hover:text-teal-600 font-medium transition-colors"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Retour aux projets
      </button>

      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-60 blur-3xl" />

        <div className="relative">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200 flex-shrink-0">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h2>
              <p className="text-gray-500 leading-relaxed">{project.description || "Aucune description"}</p>
            </div>
          </div>

          {progress && (
            <ProgressBar
              completedTasks={progress.completedTasks}
              totalTasks={progress.totalTasks}
              percentage={progress.progressPercentage}
            />
          )}
        </div>
      </div>

      <TaskForm projectId={project.id} onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} loading={false} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} />
    </div>
  )
}

export default ProjectDetails
