import Link from "next/link"
import { getAssetUrl } from "@/lib/utils"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <>
      {/* Compact Header */}
      <section className="py-8 bg-[#4a8b8b]">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src={getAssetUrl("/cmev-logo-web-1.png")} 
              alt="¡Con música en vivo! Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white" style={{fontFamily: 'Kaushan Script, cursive'}}>¡Con música en vivo!</h1>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-2">{title}</h2>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="bg-[#3e7a7a] py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-white">
            <li>
              <Link href="/" className="hover:text-white/80 transition-colors font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#events" className="hover:text-white/80 transition-colors font-medium">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white/80 transition-colors font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-white/80 transition-colors font-medium">
                Our Ensembles
              </Link>
            </li>
            <li>
              <Link href="/musicians" className="hover:text-white/80 transition-colors font-medium">
                Musicians
              </Link>
            </li>
            <li>
              <Link href="/ways-to-give" className="hover:text-white/80 transition-colors font-medium">
                Support Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white/80 transition-colors font-medium">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}