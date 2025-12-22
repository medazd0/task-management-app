"use client"
import { useState, useEffect } from "react"
import { Inbox } from "lucide-react"
import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm"
import { projectService } from "../../services/projectService"

const ProjectList = ({ onSelectProject }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      const data = await projectService.getAll()
      setProjects(data)
    } catch (err) {
      setError("Erreur lors du chargement des projets")
    } finally {
      setLoading(false)
    }
  }

  const handleProjectCreated = (newProject) => {
    setProjects([...projects, newProject])
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-3 border-teal-200 rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-3 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-gray-400 text-sm">Chargement des projets...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <ProjectForm onProjectCreated={handleProjectCreated} />

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-red-500 text-lg">!</span>
          </div>
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium mb-1">Aucun projet</p>
            <p className="text-gray-400 text-sm">Créez votre premier projet ci-dessus</p>
          </div>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={() => onSelectProject(project)} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProjectList
