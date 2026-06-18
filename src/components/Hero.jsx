import { FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/MohamedAmr-Mktg",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/mohamed-amr-elhalawany/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
];

export default function Hero() {
  return (
    <section className="px-6 pt-12 pb-16 md:px-20 md:pt-24 md:pb-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-20 items-center justify-between">
          <div className="flex-[1.2] flex flex-col gap-6 text-left max-w-[720px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl md:text-[68px] font-bold leading-[1.15] text-zinc-800 dark:text-white tracking-tight">
                Hello, I&apos;m your new favorite marketer
              </h1>
              <div className="mt-2">
                <p className="text-2xl md:text-3xl font-medium text-zinc-800 dark:text-zinc-200 tracking-tight">
                  Mohamed Amr El-Halawany
                </p>
                <p className="text-lg md:text-xl font-light text-zinc-500 dark:text-zinc-400 mt-1">
                  Digital Marketing Specialist
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg font-light leading-relaxed text-zinc-650 dark:text-zinc-400 max-w-[580px]">
              I combine business strategy, consumer psychology, and data
              analytics to make marketing decisions smarter. Majoring in
              Business Administration at Cairo University, I bridge the gap
              between creative storytelling and hard numbers.
            </p>

            <div className="flex gap-4 items-center">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-zinc-500 dark:text-zinc-400 transition-all duration-200 hover:text-black dark:hover:text-white hover:scale-110"
                >
                  <Icon className="size-6" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/167EgngplClc7ePfDbx_BA2BL1FpL3ten/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-base font-semibold text-zinc-700 dark:text-white bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                Download My CV
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative p-2.5 rounded-[32px] bg-white dark:bg-zinc-900/20 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.08),9px_9px_20px_0px_rgba(0,0,0,0.06),20px_20px_25px_0px_rgba(0,0,0,0.03)] dark:shadow-none border border-[#f5f5f5] dark:border-zinc-800/80 max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] w-full transition-all duration-300 hover:scale-[1.02]">
              <div
                className="relative rounded-3xl p-1 overflow-hidden w-full"
                style={{
                  background: "linear-gradient(to bottom, #eaeaea, #c0c0c0)",
                }}
              >
                <img
                  alt="Mohamed Amr"
                  width="540"
                  height="540"
                  className="rounded-2xl object-cover object-top w-full aspect-square"
                  src="/hero.png"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 85% 15%, rgba(255,120,100,0.25) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(255,200,100,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
