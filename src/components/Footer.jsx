import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  { href: 'https://github.com/MohamedAmr-Mktg', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/mohamed-amr-elhalawany/', label: 'LinkedIn', Icon: FaLinkedin },
]

const footerLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-12 md:px-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <div
              className="w-[45px] h-[45px] rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: 'linear-gradient(to bottom, #999, #4d4d4d)',
                boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.5), inset 0px -4px 4px 0px rgba(77,77,77,0.2)',
              }}
            >
              MA
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-405">
              © {new Date().getFullYear()} Mohamed Amr. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-400 transition-all duration-200 hover:text-black dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 dark:text-zinc-400 transition-all duration-200 hover:text-black dark:hover:text-white hover:scale-110"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
