import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { 
  FiX, 
  FiExternalLink, 
  FiChevronLeft, 
  FiChevronRight, 
  FiCheck,
  FiBookOpen,
  FiTarget,
  FiCheckCircle,
  FiCpu,
  FiPaperclip
} from 'react-icons/fi'
import { projects } from '../data/projectsData'

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const projectId = searchParams.get('id')
    if (projectId) {
      const proj = projects.find(p => p.id === projectId)
      if (proj) {
        setSelectedProject(proj)
        setActiveImageIndex(0)
      } else {
        setSelectedProject(null)
      }
    } else {
      setSelectedProject(null)
    }
  }, [searchParams])

  const openLightbox = (project) => {
    setSearchParams({ id: project.id })
  }

  const closeLightbox = () => {
    setSearchParams({})
  }

  const nextImage = (e) => {
    e.stopPropagation()
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (selectedProject) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedProject])

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 pb-20 pt-8 transition-colors duration-300">
      <section className="px-6 py-12 md:px-20 md:py-16 text-center max-w-[900px] mx-auto">
        <p className="text-base font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Portfolio</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-zinc-800 dark:text-white tracking-tight">
          My Case Studies &amp; Projects
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light text-zinc-650 dark:text-zinc-400 leading-relaxed">
          Explore the business cases behind my marketing campaigns, analytics reports, and branding projects. Click any project to view detailed outcomes and images.
        </p>
      </section>

      <section className="px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(project)}
              className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl/40 transition-all duration-300 cursor-pointer h-full"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200/40 dark:border-zinc-800/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md translate-y-3 group-hover:translate-y-0 transition-all duration-300 border border-zinc-200/50 dark:border-zinc-800">
                    View Case Details
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6 text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{project.name}</p>
                <h3 className="text-xl font-semibold leading-snug text-zinc-800 dark:text-white transition-colors duration-200 group-hover:text-black dark:group-hover:text-zinc-300">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white">
                  Read Case Study
                  <FiChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 overflow-y-auto"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-[1100px] rounded-3xl bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative flex flex-col md:flex-row md:items-center justify-between px-6 py-7 border-b border-zinc-200/50 dark:border-zinc-800/50 gap-4 bg-gradient-to-r from-zinc-50/50 dark:from-zinc-950/20 to-transparent"
            >
              <div 
                className="absolute top-0 right-0 w-80 h-32 opacity-[0.08] dark:opacity-[0.12] blur-3xl pointer-events-none rounded-full"
                style={{ background: selectedProject.gradient }}
              />
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md">
                    {selectedProject.name}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:rotate-90 transition-all duration-300 shadow-sm cursor-pointer self-start md:self-center"
                aria-label="Close modal"
              >
                <FiX className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md group">
                    <img
                      src={selectedProject.images[activeImageIndex]}
                      alt={`${selectedProject.title} slide ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-md border border-zinc-200/20 dark:border-zinc-700/30 transition-colors cursor-pointer"
                          aria-label="Previous slide"
                        >
                          <FiChevronLeft className="size-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-md border border-zinc-200/20 dark:border-zinc-700/30 transition-colors cursor-pointer"
                          aria-label="Next slide"
                        >
                          <FiChevronRight className="size-5" />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 dark:bg-zinc-950/50 px-3.5 py-2 rounded-full backdrop-blur-md border border-white/10">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setActiveImageIndex(i) }}
                          className={`size-2 rounded-full transition-colors cursor-pointer ${
                            i === activeImageIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                            i === activeImageIndex 
                              ? 'border-zinc-800 dark:border-zinc-200 scale-95 shadow-sm' 
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <FiCheckCircle className="size-3.5" /> Key Results &amp; Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(selectedProject.metrics).map(([key, val]) => (
                        <div 
                          key={key} 
                          className="relative group overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: selectedProject.gradient }} />
                          <p className={`font-extrabold text-zinc-950 dark:text-white tracking-tight break-words ${
                            String(val).length > 15 ? 'text-sm sm:text-base' : String(val).length > 8 ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl'
                          }`}>{val}</p>
                          <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-semibold uppercase tracking-wider leading-snug">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                  <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200/40 dark:border-zinc-800/60 bg-zinc-50/20 dark:bg-zinc-900/10 backdrop-blur-sm">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <FiBookOpen className="size-3.5" /> Project Overview
                    </h4>
                    <p className="text-sm text-zinc-750 dark:text-zinc-300 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200/40 dark:border-zinc-800/60 bg-zinc-50/20 dark:bg-zinc-900/10 backdrop-blur-sm">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <FiTarget className="size-3.5" /> {selectedProject.challengeLabel || 'What I Did'}
                    </h4>
                    <p className="text-sm text-zinc-750 dark:text-zinc-300 leading-relaxed font-light whitespace-pre-line">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200/40 dark:border-zinc-800/60 bg-zinc-50/20 dark:bg-zinc-900/10 backdrop-blur-sm">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <FiCheckCircle className="size-3.5" /> {selectedProject.solutionLabel || 'Key Outcomes'}
                    </h4>
                    <p className="text-sm text-zinc-750 dark:text-zinc-300 leading-relaxed font-light whitespace-pre-line">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <FiCpu className="size-3.5" /> Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span 
                          key={tool} 
                          className="text-xs text-zinc-755 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-zinc-400/50 dark:hover:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-200"
                        >
                          <FiCheck className="size-3 text-green-500" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.extras && selectedProject.extras.length > 0 && (
                    <div className="flex flex-col gap-3 mt-1">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                        <FiPaperclip className="size-3.5" /> Project Attachments
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.extras.map((extra) => (
                          <a
                            key={extra.label}
                            href={extra.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20 text-xs text-zinc-800 dark:text-zinc-200 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-850 hover:border-zinc-400/50 dark:hover:border-zinc-700/50 transition-all duration-200 cursor-pointer shadow-sm"
                          >
                            <FiExternalLink className="size-3.5 text-zinc-500" />
                            <span className="truncate">{extra.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-6 flex">
                    <a
                      href={selectedProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden cursor-pointer"
                    >
                      <span className="absolute inset-0 transition-transform duration-300 group-hover:scale-105" style={{ background: selectedProject.gradient }} />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {selectedProject.linkLabel || 'View Project'} <FiExternalLink className="size-4" />
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
