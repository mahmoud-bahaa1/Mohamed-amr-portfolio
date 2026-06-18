import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail, FiPhone, FiDownload } from 'react-icons/fi'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 pb-20 pt-8 transition-colors duration-300">
      <section className="px-6 py-12 md:px-20 md:py-16 max-w-[680px] mx-auto">
        <div className="mb-12 flex flex-col gap-4 text-center items-center">
          <p className="text-base font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] text-zinc-800 dark:text-white tracking-tight">
            Let&apos;s build something together
          </h1>
          <p className="text-lg font-light text-zinc-650 dark:text-zinc-400">
            Looking to collaborate on a marketing campaign, consult on a dashboard, or discuss opportunities? Get in touch!
          </p>
        </div>

        <div className="flex flex-col gap-8 text-left">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white text-center">Contact Information</h2>
          
          <div className="flex flex-col gap-4">
            <a
              href="mailto:medoamr4ever@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-sm"
            >
              <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                <FiMail className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">Email</p>
                <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 mt-0.5">medoamr4ever@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+201006742053"
              className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-sm"
            >
              <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                <FiPhone className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">Phone</p>
                <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 mt-0.5">+20 100 674 2053</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-amr-elhalawany/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-sm"
            >
              <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                <FaLinkedin className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">LinkedIn</p>
                <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 mt-0.5">linkedin.com/in/mohamed-amr-elhalawany</p>
              </div>
            </a>
          </div>

          <div className="mt-2 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#fafafa]/80 dark:bg-zinc-900/20 flex flex-col gap-4">
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-white">Curriculum Vitae</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                View my full professional resume on Google Drive to view my academic achievements, internships, and certification history.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/167EgngplClc7ePfDbx_BA2BL1FpL3ten/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full border-[0.5px] border-white/50 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md text-center"
              style={{ background: 'linear-gradient(to bottom, #777, #333)' }}
            >
              <FiDownload className="size-4" /> View CV on Google Drive
            </a>
          </div>

          <div className="flex flex-col gap-3 items-center mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Follow my work</p>
            <div className="flex gap-4">
              {[
                { href: 'https://github.com/MohamedAmr-Mktg', label: 'GitHub', Icon: FaGithub },
                { href: 'https://www.linkedin.com/in/mohamed-amr-elhalawany/', label: 'LinkedIn', Icon: FaLinkedin },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900/20 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 hover:scale-105"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
