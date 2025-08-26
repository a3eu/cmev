import Link from "next/link"

export default function PageFooter() {
  return (
    <footer className="bg-[#3e7a7a] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'Kaushan Script, cursive'}}>¡Con música en vivo!</h3>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#events" className="text-white/80 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/musicians" className="text-white/80 hover:text-white transition-colors">
                  Musicians
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ways-to-give" className="text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email info@conmusicaenvivo.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">© 2025 ¡Con música en vivo! All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}