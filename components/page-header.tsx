import Link from "next/link"
import { getAssetUrl } from "@/lib/utils"

const FRILING_SHOW_FROM = new Date("2026-06-01T07:00:00Z") // June 1 midnight PT

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  const showFriling = new Date() >= FRILING_SHOW_FROM
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
            <li className="relative group">
              <Link href="/#projects" className="hover:text-white/80 transition-colors font-medium">
                Our Ensembles
              </Link>
              <ul className="absolute left-0 top-full mt-2 bg-[#3e7a7a] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li>
                  <Link href="/tarareando" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                    OT Tarareando
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                    Luz de neón
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/musicians" className="hover:text-white/80 transition-colors font-medium">
                Musicians
              </Link>
            </li>
            <li className="relative group">
              <Link href="/recordings" className="hover:text-white/80 transition-colors font-medium inline-flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded" style={{transform: 'rotate(-4deg)'}}>NEW</span>
                Recordings
              </Link>
              <ul className="absolute left-0 top-full mt-2 bg-[#3e7a7a] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li>
                  <Link href="/facturas" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                    Facturas (EP)
                  </Link>
                </li>
                {showFriling && (
                  <li>
                    <Link href="/friling" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                      Friling (Single)
                    </Link>
                  </li>
                )}
              </ul>
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
            <li>
              <Link href="/newsletter-signup" className="hover:text-white/80 transition-colors font-medium">
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}