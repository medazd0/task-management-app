import { useState } from "react"
import { Plus, Sparkles } from "lucide-react"
import { projectService } from "../../services/projectService"

const ProjectForm = ({ onProjectCreated }) => {
  const [formData, setFormData] = useState({ title: "", description: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const newProject = await projectService.create(formData)
      setFormData({ title: "", description: "" })
      onProjectCreated(newProject)
    } catch (err) {
      setError("Erreur lors de la création du projet")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-50 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
            <Sparkles size={20} className="text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Créer un nouveau projet</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onFocus={() => setFocused("title")}
                onBlur={() => setFocused(null)}
                required
                className={`peer w-full px-4 py-4 bg-gray-50/80 border-2 rounded-xl text-gray-900 
                           placeholder-transparent transition-all duration-300
                           ${focused === "title" ? "border-teal-400 bg-white shadow-lg shadow-teal-50" : "border-gray-100"}
                           focus:outline-none focus:border-teal-400 focus:bg-white focus:shadow-lg focus:shadow-teal-50`}
                placeholder="Titre"
              />
              <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none
                                ${
                                  formData.title || focused === "title"
                                    ? "-top-2.5 text-xs bg-white px-2 text-teal-600 font-medium"
                                    : "top-4 text-gray-400"
                                }`}
              >
                Titre du projet
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                onFocus={() => setFocused("description")}
                onBlur={() => setFocused(null)}
                className={`peer w-full px-4 py-4 bg-gray-50/80 border-2 rounded-xl text-gray-900 
                           placeholder-transparent transition-all duration-300
                           ${focused === "description" ? "border-teal-400 bg-white shadow-lg shadow-teal-50" : "border-gray-100"}
                           focus:outline-none focus:border-teal-400 focus:bg-white focus:shadow-lg focus:shadow-teal-50`}
                placeholder="Description"
              />
              <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none
                                ${
                                  formData.description || focused === "description"
                                    ? "-top-2.5 text-xs bg-white px-2 text-teal-600 font-medium"
                                    : "top-4 text-gray-400"
                                }`}
              >
                Description (optionnel)
              </label>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium 
                       rounded-xl overflow-hidden transition-all duration-300
                       hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-0.5
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span className="relative flex items-center gap-2">
              <Plus size={18} className={loading ? "animate-spin" : ""} />
              {loading ? "Création..." : "Créer le projet"}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProjectForm
