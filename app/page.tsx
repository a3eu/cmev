"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, Piano, Users, NotebookPen, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import PageFooter from "@/components/page-footer"
import { getAssetUrl } from "@/lib/utils"
import { getUpcomingEvents, getPastEvents, formatEventDate } from "@/lib/events"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
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
                <li>
                  <Link href="/friling" className="block px-4 py-2 hover:bg-[#4a8b8b] transition-colors whitespace-nowrap">
                    Friling (Single)
                  </Link>
                </li>
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
