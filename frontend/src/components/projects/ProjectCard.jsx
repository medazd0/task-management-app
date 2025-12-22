import { ArrowRight, Folder } from "lucide-react"

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 
                 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100/50 
                 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 
                      transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      />

      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl 
                          flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          >
            <Folder className="w-6 h-6 text-teal-500" />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed line-clamp-2">
          {project.description || "Aucune description"}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <span
            className="inline-flex items-center gap-2 text-teal-600 font-medium text-sm 
                          group-hover:gap-3 transition-all"
          >
            Voir les détails
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
