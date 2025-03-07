import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-7xl font-bold">Simulasi Studio</h1>
        </div>
      </main>
      <footer className="row-start-3 w-full py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-700 dark:text-primary-300">
          <div className="text-center sm:text-left">
            <span className="text-sm">© {new Date().getFullYear()} Simulasi Studio. All rights reserved.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/contact"
              className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 transition-colors duration-200"
            >
              Contact Us
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/simulasistudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://twitter.com/simulasistudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-accent-600 hover:text-accent-800 dark:text-accent-400 dark:hover:text-accent-200 transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="https://linkedin.com/company/simulasistudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-200 transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="mailto:contact@simulasistudio.com"
                aria-label="Email"
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
