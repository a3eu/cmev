"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, Piano, Users, NotebookPen, MapPin, Clock, XCircle } from "lucide-react"
import Link from "next/link"
import PageFooter from "@/components/page-footer"
import { getAssetUrl } from "@/lib/utils"
import { getUpcomingEvents, getPastEvents, formatEventDate } from "@/lib/events"

const HERO_OTT06_UNTIL = new Date("2026-05-10T23:59:59Z")
const EARLY_BIRD_UNTIL = new Date("2026-04-01T00:00:00Z")
const SOLLA_LIZANA_UNTIL = new Date("2026-06-13T07:00:00Z") // June 12 11:59pm PT
const FACTURAS_BANNER_UNTIL = new Date("2026-05-28T06:59:00Z") // May 27 11:59pm PT
const FRILING_SHOW_FROM = new Date("2026-06-01T07:00:00Z")     // June 1 midnight PT

export default function HomePage() {
  const useOtt06Layout = new Date() <= HERO_OTT06_UNTIL
  const showEarlyBird = new Date() < EARLY_BIRD_UNTIL
  const useApr1Banner = new Date() >= EARLY_BIRD_UNTIL
  const [topBannerClosed, setTopBannerClosed] = useState(false)
  const showSollaLizanaBanner = new Date() <= SOLLA_LIZANA_UNTIL
  const [sollaLizanaBannerClosed, setSollaLizanaBannerClosed] = useState(false)
  const showFacturasBanner = new Date() <= FACTURAS_BANNER_UNTIL
  const showFriling = new Date() >= FRILING_SHOW_FROM

  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      {showSollaLizanaBanner && !sollaLizanaBannerClosed && (
        <div className="relative bg-[#0d1f1f]">
          <div className="flex flex-col min-[800px]:flex-row">
            {/* Photo — visible only on desktop */}
            <div className="hidden min-[800px]:block min-[800px]:w-[22%] relative overflow-hidden">
              <img
                src={getAssetUrl("/solla-lizana.jpg")}
                alt="Emilio Solla and Antonio Lizana"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            {/* Text */}
            <div className="order-2 min-[800px]:order-none min-[800px]:w-[33%] flex flex-col justify-center items-center px-6 py-5 text-white text-center">
              <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Upcoming Concert · June 12</p>
              <h2 className="font-serif text-xl min-[800px]:text-2xl font-bold mb-1 leading-tight">
                Emilio Solla &amp; Antonio Lizana
              </h2>
              <p className="text-base min-[800px]:text-lg font-serif italic text-[#c9a84c] mb-3">El Siempre Mar</p>
              <p className="text-sm text-white/70 mb-4">A fusion of Tango, Flamenco, and Jazz</p>
              <div className="text-sm text-white/75 mb-3 space-y-0.5">
                <p>7:30PM · Gradus ad Parnassum</p>
                <p>1527 South B Street, San Mateo</p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/50 mb-5">
                <a href="http://www.emiliosolla.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 underline underline-offset-2 transition-colors">Emilio Solla</a>
                <a href="https://www.antoniolizanamusic.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 underline underline-offset-2 transition-colors">Antonio Lizana</a>
              </div>
              <div>
                <a
                  href="https://www.zeffy.com/en-US/ticketing/emilio-solla-and-antonio-lizana-el-siempre-mar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#c9a84c] hover:bg-[#b8973e] text-[#0d1f1f] font-semibold px-5 py-2 rounded text-sm transition-colors"
                >
                  Get Tickets
                </a>
              </div>
            </div>
            {/* Video — 16:9 responsive embed */}
            <div className="order-1 min-[800px]:order-none w-full min-[800px]:w-[45%]">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/HwO33NVrmUs"
                  title="Emilio Solla and Antonio Lizana — El Siempre Mar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSollaLizanaBannerClosed(true)}
            className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close banner"
          >
            <XCircle className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      )}
      {showFacturasBanner && (
        <div className="bg-red-700 py-4 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white text-center">
            <span className="font-semibold">
              <strong>FACTURAS</strong> (EP) by Orquesta Típica Tarareando is out!
            </span>
            <a
              href="https://music.apple.com/us/album/facturas-ep/6769608835"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/10 border border-white/30 transition-colors whitespace-nowrap"
            >
              <Music className="w-4 h-4" />
              Listen on Apple Music
            </a>
            <a
              href="https://open.spotify.com/album/5ndYTQXmdmfdbYSDihHzvs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1DB954] text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#1aa34a] transition-colors whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              Listen on Spotify
            </a>
            <a
              href="https://music.youtube.com/watch?v=cjJqMHOBQG8&si=wGx6AkFQ48uz4xtB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0000] text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#cc0000] transition-colors whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Listen on YouTube Music
            </a>
          </div>
        </div>
      )}

      {useOtt06Layout ? (
        /* Hero: may9 banner on top, then ott-06y7 banner and layout until May 11, 2026 */
        <>
          {!topBannerClosed && (
            <div className="relative">
              <a 
                href="https://www.sfiaf.org/sfiaf2026_orquesta_tipica_tarareando" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={getAssetUrl(useApr1Banner ? "/may9banner-apr1.webp" : "/may9banner.webp")}
                  alt="May 9, 2026 — San Francisco International Arts Festival" 
                  className="w-full h-auto block"
                />
              </a>
              <div id="sfiaf-line" className="py-2 px-8 text-center bg-[#3e7a7a]/95 text-white text-sm min-[500px]:text-base font-medium">
                <div className="max-w-6xl mx-auto">
                  Orquesta Típica Tarareando plays at the <a href="https://www.sfiaf.org" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">San Francisco International Arts Festival</a> on <a href="https://www.sfiaf.org/sfiaf2026_orquesta_tipica_tarareando" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">May 9, 4:30pm</a>.
                  {showEarlyBird && " EARLY BIRD "}<a href="https://sfiaf.vbotickets.com/event/Tango_and_Beyond_w_Orquesta_Tpica_Tarareando_SF_International_Arts_Festival/184150" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">tickets</a> on sale!
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTopBannerClosed(true) }}
                className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close banner"
              >
                <XCircle className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
          )}
          <section 
            className="relative flex items-end justify-center bg-[#4a8b8b] min-h-[50vw]"
            style={{ paddingTop: 'min(4rem, 8vw)', paddingBottom: 'min(2rem, 4vw)', paddingLeft: '1rem', paddingRight: '1rem' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-no-repeat min-[1300px]:hidden"
              style={{
                backgroundImage: `url(${getAssetUrl("/ott-06y7.webp")})`,
                backgroundPosition: 'center 10%'
              }}
            />
            <div
              className="absolute inset-0 bg-cover bg-no-repeat hidden min-[1300px]:block"
              style={{
                backgroundImage: `url(${getAssetUrl("/ott-06y7.webp")})`,
                backgroundPosition: 'top'
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-left max-w-4xl mx-auto flex flex-row flex-wrap items-center gap-3 px-4 min-[800px]:flex-nowrap min-[800px]:text-center min-[800px]:items-center min-[800px]:absolute min-[800px]:bottom-[5%] min-[800px]:left-0 min-[800px]:right-0 min-[800px]:max-w-6xl min-[800px]:px-4 min-[800px]:gap-4 min-[800px]:scale-[0.85] min-[800px]:origin-bottom-left">
            <div 
              className="shrink-0 min-[800px]:!ml-[calc(25%_-_min(16vw,4.8rem))]"
              style={{ fontSize: 'min(8vw, 3.75rem)' }}
            >
              <img 
                src={getAssetUrl("/cmev-logo-web-1.png")} 
                alt="¡Con música en vivo! Logo" 
                className="object-contain opacity-90"
                style={{ width: '2.56em', height: '2.56em' }}
              />
            </div>
            <div className="min-w-0 min-[800px]:text-left">
              <h1 
                className="font-bold text-white whitespace-nowrap opacity-90" 
                style={{ fontFamily: 'Kaushan Script, cursive', fontSize: 'min(8vw, 3.75rem)', marginBottom: 'min(1rem, 3vw)' }}
              >
                ¡Con música en vivo!
              </h1>
              <p style={{ opacity: 0.8, fontSize: 'min(4vw, 1.25rem)' }} className="font-serif font-bold text-white max-w-2xl whitespace-nowrap">
                LIFE IS BETTER WITH LIVE MUSIC
              </p>
            </div>
          </div>
          </section>
        </>
      ) : (
        /* Hero: exact layout from before ott-06 (from May 11, 2026) */
        <section 
          className="relative flex items-end justify-center bg-[#4a8b8b] min-[800px]:min-h-[50vw] min-[1300px]:min-h-[36.87vw]"
          style={{ paddingTop: 'min(4rem, 8vw)', paddingBottom: 'min(2rem, 4vw)', paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-[center_70%] min-[1300px]:hidden"
            style={{ backgroundImage: `url(${getAssetUrl("/OTT-BANNER-001.jpg")})` }}
          />
          <div 
            className="absolute inset-0 bg-center bg-no-repeat hidden min-[1300px]:block"
            style={{ 
              backgroundImage: `url(${getAssetUrl("/OTT-BANNER-000.jpg")})`,
              backgroundSize: '100% auto'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col min-[800px]:absolute min-[800px]:bottom-[5%] min-[800px]:left-0 min-[800px]:right-0 min-[800px]:max-w-6xl min-[800px]:px-4 min-[800px]:flex-row min-[800px]:items-center min-[800px]:gap-4 min-[800px]:scale-[0.85] min-[800px]:origin-bottom-left">
            <div className="min-[800px]:!ml-0" style={{ marginLeft: 'calc(25% - min(16vw, 4.8rem))' }}>
              <img 
                src={getAssetUrl("/cmev-logo-web-1.png")} 
                alt="¡Con música en vivo! Logo" 
                className="object-contain opacity-90"
                style={{ width: 'min(32vw, 9.6rem)', height: 'min(32vw, 9.6rem)', marginBottom: 'min(1.5rem, 4vw)' }}
              />
            </div>
            <div className="min-[800px]:text-left">
              <h1 
                className="font-bold text-white whitespace-nowrap opacity-90" 
                style={{ fontFamily: 'Kaushan Script, cursive', fontSize: 'min(8vw, 3.75rem)', marginBottom: 'min(1rem, 3vw)' }}
              >
                ¡Con música en vivo!
              </h1>
              <p style={{ opacity: 0.8, fontSize: 'min(4vw, 1.25rem)' }} className="font-serif font-bold text-white max-w-2xl whitespace-nowrap">
                LIFE IS BETTER WITH LIVE MUSIC
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Bar */}
      <nav className="bg-[#3e7a7a] py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-white">
            <li>
              <a href="#events" className="hover:text-white/80 transition-colors font-medium">
                Events
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white/80 transition-colors font-medium">
                About
              </a>
            </li>
            <li className="relative group">
              <a href="#projects" className="hover:text-white/80 transition-colors font-medium">
                Our Ensembles
              </a>
              <ul className="absolute left-0 top-full mt-2 bg-[#3e7a7a] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] z-50">
                <li>
                  <Link href="/tarareando" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                    OT Tarareando
                  </Link>
                </li>
                <li>
                  <a href="#projects" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                    Luz de neón
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/musicians" className="hover:text-white/80 transition-colors font-medium">
                Musicians
              </Link>
            </li>
            <li className="relative group">
              <Link href="/recordings" className="hover:text-white/80 transition-colors font-medium">
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

      {/* Upcoming Events */}
      <section id="events" className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Upcoming Events</h2>
          </div>

          {getUpcomingEvents().length === 0 ? (
            <p className="text-center text-lg md:text-2xl text-muted-foreground">Be the first to know!</p>
          ) : (
          <div className="grid md:grid-cols-2 gap-8">
              {getUpcomingEvents().map((event) => (
                <Card key={event.id}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                      <span className="text-sm text-muted-foreground">{formatEventDate(event.date)}</span>
                </div>
                    {event.link ? (
                      <CardTitle className="font-serif text-xl">
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                          {event.title}
                        </a>
                      </CardTitle>
                    ) : (
                      <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                    )}
              </CardHeader>
              <CardContent>
                    {event.time && (
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.time}</span>
                </div>
                    )}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                  {/\d/.test(event.location) ? (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      {event.location}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  )}
                </div>
                    {event.description && (
                <CardDescription className="mb-4 space-y-2">
                        {event.description.split('\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                </CardDescription>
                    )}
                    {event.link && (
                      <Button 
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open(event.link, "_blank")}
                >
                  Learn more
                </Button>
                    )}
              </CardContent>
            </Card>
              ))}
                </div>
          )}
        </div>
      </section>

      {/* Join Mailing List Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-4 md:p-16 gap-6">
            <Button
                className="bg-[#166579] hover:bg-[#4e788b] text-white font-bold px-8 lg:py-10 sm:py-4 py-9 md:px-20 md:py-6 sm:text-3xl lg:text-5xl md:text-4xl rounded-2xl w-full max-w-4xl"
                variant="outline"
                onClick={() => window.open("https://lp.constantcontactpages.com/sl/c8g81Dc", "_blank")}>Join our mailing list!</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About us</h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are a 501(c)3 nonprofit with mission to support live performances and education in Argentine Tango and Modern Chamber Music throughout the San Francisco Bay Area and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl">Live Tango for Dancing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Authentic Argentine Tango music at tango dancing events
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Piano className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl">Concerts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Showcasing classic and contemporary compositions in concert settings
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <NotebookPen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl">Music Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sharing our knowledge in tango and chamber music with musicians, dancers, and audiences
                </CardDescription>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Ensembles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/tarareando">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    src="https://www.youtube.com/embed/jauK8-tid1s"
                    title="Orquesta Típica Tarareando"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Orquesta Típica Tarareando</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Traditional Argentine Tango orchestra bringing authentic sounds of Buenos Aires to the Bay Area and beyond
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video bg-cover bg-center"
                style={{
                  backgroundImage: `url('${getAssetUrl('/luz-de-neon-publicity-1.jpg')}')`,
                }}
              />
              <CardHeader>
                <CardTitle className="font-serif text-xl">Luz de neón</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Piano/bandoneón/voice duet.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground"></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Milongas", slug: "milongas" },
              { name: "House Concerts", slug: "house-concerts" },
              { name: "Music Lessons and Coaching", slug: "music-lessons" },
              { name: "Tango Musicality Classes", slug: "tango-musicality" },
              { name: "Sound Reinforcement", slug: "sound" },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardTitle className="font-serif text-lg mb-4">{service.name}</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="donate" className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Support Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Help us continue bringing the beauty of Argentine Tango and Chamber Music to the community
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <CardTitle className="font-serif text-xl mb-4">Come to a Performance</CardTitle>
              <CardDescription className="mb-4">
                Experience the magic of live music at our intimate venues
              </CardDescription>
              <Button variant="outline" asChild><a href="#events">View Calendar</a></Button>
            </Card>

            <Card className="p-6 text-center">
              <CardTitle className="font-serif text-xl mb-4">Donate</CardTitle>
              <CardDescription className="mb-4">Support our musicians and educational programs</CardDescription>
              <Button variant="outline"><Link href="/ways-to-give">Make a Donation</Link></Button>
            </Card>

            <Card className="p-6 text-center">
              <CardTitle className="font-serif text-xl mb-4">Host an Event</CardTitle>
              <CardDescription className="mb-4">Bring live music to your home or venue</CardDescription>
              <Button variant="outline" asChild><Link href="/services/house-concerts">Learn More</Link></Button>
            </Card>
          </div>

          {/*<Card className="p-0 bg-[#3e7a7a] text-center rounded-2xl">*/}
          {/*  /!*<CardTitle className="font-serif text-xl mb-4">Donate</CardTitle>*!/*/}
          {/*  /!*<CardDescription className="mb-4">Support our musicians and educational programs</CardDescription>*!/*/}
          {/*  <Button*/}
          {/*      className="bg-[#166579] hover:bg-[#4e788b] text-white font-bold px-18 py-9 text-3xl rounded-2xl"*/}
          {/*      variant="outline"><Link href="/newsletter-signup">Join our mailing list! </Link></Button>*/}
          {/*</Card>*/}

          {/*/!* Newsletter Signup *!/*/}
          {/*<Card className="p-0 overflow-hidden">*/}
          {/*  <div className="relative w-full h-64 bg-amber-200">*/}
          {/*    <iframe*/}
          {/*      title="Signup form powered by Zeffy"*/}
          {/*      style={{*/}
          {/*        position: 'absolute',*/}
          {/*        border: 0,*/}
          {/*        top: 0,*/}
          {/*        left: 0,*/}
          {/*        bottom: 0,*/}
          {/*        right: 0,*/}
          {/*        width: '100%',*/}
          {/*        height: '100%'*/}
          {/*      }}*/}
          {/*      src="https://www.zeffy.com/en-US/embed/newsletter-form/join-our-mailing-list-4"*/}
          {/*      allowtransparency={"true"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</Card>*/}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Past Events</h2>
          </div>

          <ul className="space-y-2">
            {getPastEvents().map((event) => {
              const [year, month, day] = event.date.split("-");
              const shortDate = `${parseInt(month)}.${parseInt(day)}.${year.slice(2)}`;
              return (
                <li key={event.id} className="text-base text-foreground">
                  <span className="font-bold">{shortDate}</span>
                  {" "}{event.title}{event.city ? `, ${event.city}` : ""}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
