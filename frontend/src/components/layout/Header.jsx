"use client"
import { LogOut, LayoutGrid } from "lucide-react"

const Header = ({ onLogout, userEmail }) => {
  return (
    <div className="relative bg-gradient-to-r from-teal-50/80 to-cyan-50/80 backdrop-blur-lg border-b border-gray-100/50 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl" />
      <div className="absolute -top-16 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200/50 transition-transform duration-300 hover:scale-105">
              <LayoutGrid size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Mes Projets
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Gérez vos projets efficacement</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {userEmail && (
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">{userEmail}</span>
              </div>
            )}

            <button
              onClick={onLogout}
              className="group flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm text-gray-700 font-medium rounded-xl border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-red-200/50 hover:-translate-y-0.5"
            >
              <LogOut size={18} className="transition-transform duration-300 group-hover:rotate-12" />
              <span className="hidden sm:inline text-sm">Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
