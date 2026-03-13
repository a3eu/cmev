import PageFooter from "@/components/page-footer"
import Link from "next/link"
import { getAssetUrl } from "@/lib/utils"

export default function TarareandoPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      {/* Hero Section with background image */}
      <section 
        className="relative flex items-end justify-start min-[800px]:justify-center bg-[#4a8b8b] min-[800px]:min-h-[50vw] min-[1300px]:min-h-[36.87vw]"
        style={{ paddingTop: 'min(4rem, 8vw)', paddingBottom: 'min(2rem, 4vw)', paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        {/* Background image - BANNER-001 for screens < 1300px */}
        <div 
          className="absolute inset-0 bg-cover bg-[center_70%] min-[1300px]:hidden"
          style={{ backgroundImage: `url(${getAssetUrl("/OTT-BANNER-001.jpg")})` }}
        />
        {/* Background image - BANNER-000 for screens >= 1300px */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat hidden min-[1300px]:block"
          style={{ 
            backgroundImage: `url(${getAssetUrl("/OTT-BANNER-000.jpg")})`,
            backgroundSize: '100% auto'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* CMEV Logo - top left */}
        <Link href="/" className="absolute top-4 left-4 z-20">
          <img 
            src={getAssetUrl("/cmev-logo-web-1.png")} 
            alt="¡Con música en vivo! Logo" 
            className="w-12 h-12 min-[800px]:w-24 min-[800px]:h-24 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
        <div className="relative z-10 text-left mt-auto min-[800px]:absolute min-[800px]:bottom-0 min-[800px]:left-0 min-[800px]:right-0 mb-[calc(-10%-30px)] min-[800px]:mb-[-5%]">
          <img 
            src={getAssetUrl("/OTT Logo White.svg?v=4")} 
            alt="Orquesta Típica Tarareando" 
            className="ml-[5%] opacity-90 w-[66vw] min-[800px]:w-[55vw] min-[1300px]:w-[50vw]"
          />
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

      {/* Bio Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">Orquesta Típica Tarareando</h1>
          <p className="text-lg text-muted-foreground mb-12">Alexander Zeyliger, direction</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground text-lg mb-6">
              Orquesta Típica Tarareando is a San Francisco Bay Area ensemble specializing in authentic Argentine Tango. The orchestra's repertoire includes traditional Golden Age tangos, original arrangements of classics, and modern compositions.
            </p>
            <p className="text-foreground text-lg mb-6">
              United by a shared passion for tango, <Link href="/musicians" className="underline text-blue-600 hover:text-blue-800">musicians</Link> bring a wealth of experience from diverse musical backgrounds. Individually and as an ensemble, the members have studied with, performed alongside, and accompanied many of today's leading tango artists.
            </p>
            <p className="text-foreground text-lg mb-6">
                Showcasing traditional and contemporary works,
                the group maintains a vibrant schedule of concerts
                and social dances. The 2025 season featured appearances
                at top Bay Area dance events, a milonga at Union Square,
                concerts at the Palo Alto JCC and Gradus ad Parnassum Music Academy,
                and a collaboration with the First Presbyterian San Anselmo choir
                to perform Martín Palmeri’s Misatango.
            </p>
          </div>

          <p className="text-foreground text-lg mt-8 mb-6">
            The word <em>tarareando</em> (from the verb <em>tararear</em>) describes
              the act of humming or vocalizing a melody—literally 'ta-ra-ra-ing' to follow the tune.
              In the Golden Age tango <Link href="https://www.todotango.com/musica/tema/4224/Tarareando/"
                                            className="underline text-blue-600 hover:text-blue-800"
          >Tarareando</Link>, by Juan José Guichandut and Oscar Rubens, the protagonist sings: 'Whatever trouble life throws at me, I just hum my song&mdash;<em>ta-ra-ra-rí, ta-ra-ra</em>&mdash;and life is better for it.'
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61575113623112"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#3e7a7a] hover:bg-[#4a8b8b] rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/orquestatarareando/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#3e7a7a] hover:bg-[#4a8b8b] rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          <p className="text-muted-foreground mt-6">
            Please <Link href="/newsletter-signup" className="underline text-blue-600 hover:text-blue-800">subscribe to our mailing list</Link> or follow us on social media to stay up to date on our performance schedule.
          </p>

          <p className="text-muted-foreground mt-4">
            For bookings or inquiries, please email <a href="mailto:info@conmusicaenvivo.org" className="underline text-blue-600 hover:text-blue-800">info@conmusicaenvivo.org</a>.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Video 1 */}
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/jauK8-tid1s"
                title="Orquesta Típica Tarareando"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video 2 */}
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Vo1_ScX0PTc"
                title="Más allá del tango"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video 4 */}
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ebyYhNKwayM"
                title="La yumba"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Photo Gallery */}
            <div className="mt-8 flex flex-col gap-3">
              {/* Row 1 - full width */}
              <img loading="lazy" src={getAssetUrl("/b2-2.jpg")} alt="2025 highlights" className="w-full h-auto rounded-lg" />

              {/* Row 2 - two images side by side, heights matched */}
              <div className="flex gap-3 items-stretch">
                <div className="w-[58%] overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src={getAssetUrl("/b2-3.jpg")}
                    alt="2025 highlights"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <img loading="lazy" src={getAssetUrl("/b2-5.webp")} alt="2025 highlights" className="w-[42%] h-auto rounded-lg" />
              </div>

              {/* Row 3 - full width */}
              <img loading="lazy" src={getAssetUrl("/b2-6.jpg")} alt="2025 highlights" className="w-full h-auto rounded-lg" />

              {/* Row 4 - full width */}
              <img loading="lazy" src={getAssetUrl("/b2-4.webp")} alt="2025 highlights" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
