import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiGrid, FiList } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { projects } from '../data/projectsData'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900/20 shadow-sm hover:shadow-xl transition-all duration-355 cursor-pointer h-full"
    >
      <div className="relative h-[200px] flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/5 dark:bg-black/20" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{project.name}</p>
        <h3 className="text-base font-medium leading-snug text-zinc-850 dark:text-white">{project.title}</h3>
        <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed line-clamp-3">{project.description}</p>
        <Link
          to={`/projects?id=${project.id}`}
          className="group/cta mt-auto flex items-center gap-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          View Case details
          <FiChevronRight className="size-4 transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  )
}

function ProjectListItem({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ x: 6, scale: 1.01 }}
      className="flex items-center gap-6 py-5 border-b border-zinc-200 dark:border-zinc-800 last:border-none rounded-xl px-3 -mx-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors duration-200"
    >
      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800">
        <img src={project.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{project.name}</p>
        <h3 className="text-base font-medium text-zinc-800 dark:text-white truncate">{project.title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-450 line-clamp-1">{project.description}</p>
      </div>
      <Link
        to={`/projects?id=${project.id}`}
        className="group/cta flex items-center gap-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-all duration-200 shrink-0"
      >
        View Case
        <FiChevronRight className="size-4 transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
      </Link>
    </motion.div>
  )
}

function DesktopProjectPill({ project, isActive, onClick }) {
  return (
    <motion.div
      layout
      initial={{
        width: isActive ? 436 : 32,
        height: isActive ? 540 : project.pillH || 400,
      }}
      onClick={onClick}
      title={isActive ? undefined : project.name}
      className="relative shrink-0 cursor-pointer overflow-hidden"
      animate={{
        width: isActive ? 436 : 32,
        height: isActive ? 540 : project.pillH || 400,
      }}
      whileHover={!isActive ? { 
        scaleX: 1.25, 
        scaleY: 1.03, 
        filter: "brightness(1.1)", 
        zIndex: 10 
      } : {}}
      transition={{ type: "spring", stiffness: 350, damping: 32 }}
      style={{
        originX: 0.5,
        originY: 0.5,
      }}
    >
      <motion.div
        layout
        className="h-full w-full overflow-hidden"
        animate={{
          borderRadius: isActive ? 16 : 9999,
          padding: isActive ? 2 : 1.5,
          opacity: isActive ? 1 : 0.35,
        }}
        style={{
          background: project.gradient,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 32 }}
      >
        <motion.div
          layout
          className="h-full w-full overflow-hidden bg-white dark:bg-zinc-900"
          animate={{
            borderRadius: isActive ? 14 : 9999,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 32 }}
        >
          <motion.div
            className="flex h-full w-full flex-col"
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ 
              opacity: { 
                delay: isActive ? 0.25 : 0, 
                duration: isActive ? 0.25 : 0.1 
              } 
            }}
            style={{
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <div className="relative shrink-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950/20" style={{ height: '240px' }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.08)] dark:shadow-none bg-black/0 dark:bg-black/10" />
            </div>
            <div className="flex flex-1 flex-col gap-5 px-6 pb-8 pt-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-450">{project.name}</p>
                <h3 className="text-2xl font-medium leading-snug text-zinc-850 dark:text-white">{project.title}</h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">{project.description}</p>
              </div>
              <Link
                to={`/projects?id=${project.id}`}
                className="group/cta mt-auto inline-flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                View Case Study
                <FiChevronRight className="size-5 transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [view, setView] = useState('grid')
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  useEffect(() => {
    if (activeIndex >= displayedProjects.length) {
      setActiveIndex(0)
    }
  }, [displayedProjects.length, activeIndex])

  return (
    <section id="projects" className="overflow-hidden px-6 pb-20 pt-16 md:px-20 md:pb-28 md:pt-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-[1280px]">

        <div className="mx-auto max-w-[768px] text-center">
          <p className="text-base font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Selected Projects</p>
          <div className="mt-4 flex flex-col gap-5">
            <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] text-zinc-850 dark:text-white">
              Selected works from
              <br className="hidden md:inline" /> marketing &amp; analytics
            </h2>
            <p className="text-xl font-light leading-relaxed text-zinc-650 dark:text-zinc-400">
              A look at my recent campaigns, research reports, and custom dashboards.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm">
            {[
              { id: 'grid', icon: <FiGrid className="size-5" />, label: 'Grid view' },
              { id: 'list', icon: <FiList className="size-5" />, label: 'List view' },
            ].map(({ id, icon, label }) => (
              <button
                key={id}
                id={`view-${id}-btn`}
                aria-label={label}
                className={`flex items-center justify-center rounded-full p-2.5 transition-all duration-200 active:scale-90 cursor-pointer ${
                  view === id ? 'bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-950' : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
                onClick={() => setView(id)}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {view === 'grid' && (
          <>
            <div className="hidden md:flex mt-10 h-[540px] w-full items-center justify-center gap-4">
              {displayedProjects.map((project, i) => (
                <DesktopProjectPill
                  key={project.id}
                  project={project}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:hidden">
              {displayedProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}

        {view === 'list' && (
          <div className="mt-8 max-w-[800px] mx-auto">
            {displayedProjects.map((project, i) => (
              <ProjectListItem key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer rounded-full border-[0.5px] border-white/50 px-10 py-3.5 text-base font-semibold text-white shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.4),inset_0px_-4px_4px_0px_rgba(77,77,77,0.25)] transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-[0.97]"
            style={{ background: 'linear-gradient(to bottom, #777, #333)' }}
          >
            {showAll ? 'Show Less' : 'View Projects'}
          </button>
        </div>

      </div>
    </section>
  )
}
