"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, Piano, Users, NotebookPen, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import PageFooter from "@/components/page-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center justify-center bg-[#4a8b8b]">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <img 
              src="/v2/cmev-logo-web-1.png" 
              alt="¡Con música en vivo! Logo" 
              className="w-48 h-48 mx-auto mb-6 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Kaushan Script, cursive'}}>¡Con música en vivo!</h1>
          <p
              style={{
                opacity: 0.8,
              }}
              className="font-serif font-bold text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            LIFE IS BETTER WITH LIVE MUSIC
          </p>
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
            <li>
              <a href="#projects" className="hover:text-white/80 transition-colors font-medium">
                Our Ensembles
              </a>
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

      {/* Upcoming Events */}
      <section id="events" className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">September 6, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Tango Night at Feeling Flow (Palo Alto)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">5:30&ndash;9PM (live music at 7PM)</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1680 Bryant St, Palo Alto</span>
                </div>
                <CardDescription className="mb-4">
                  Solos, duets, and trios performed by Special guest Yukie (Japan) and the Duo <i>Luz de neón</i>.
                </CardDescription>
                <Button variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://www.feelingflow.org/tea-tango#register", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">September 12, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Orquesta Tarareando at Milonga Genesis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">8:30PM&ndash;12:30AM (live set around 10pm)</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">404 Clement St, San Francisco</span>
                </div>
                <CardDescription className="mb-4">
                  Orquesta Típica Tarareando performs at Milonga Genesis in San Francisco
                </CardDescription>
                <Button variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://sftangowith.us/event/la-milonga-genesis-25-2/2025-09-12/", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">September 13, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Orquesta Tarareando at Milonga Sentimental</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">8PM&ndash;12:30AM (live set around 9:30PM)</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">217 S Claremont St, San Mateo, CA</span>
                </div>
                <CardDescription className="mb-4">
                  Orquesta Típica Tarareando performs at Milonga Sentimental at the Motion Arts Center in San Mateo
                </CardDescription>
                <Button variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://motionartscenter.com/milonga-dance-party/", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">November 18, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Orquesta Tarareando in concert at JCC Palo Alto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1&ndash;2PM</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1529 S B St. San Mateo, CA</span>
                </div>
                <CardDescription className="mb-4">
                  Orquesta Típica Tarareando presents selections of classic and contemporary tangos.
                </CardDescription>
                <Button variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://www.paloaltojcc.org/events/argentine-tango-music-that-moves", "_blank")}
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About us</h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our mission is to support live performances and education in Argentine Tango and Modern Chamber Music throughout the San Francisco Bay Area and beyond
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/uHfkAfNkTUc"
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

            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video bg-cover bg-center"
                style={{
                  backgroundImage: "url('/v2/luz-de-neon-publicity-1.jpg')",
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

      {/* Past Events Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Past Events</h2>
            <p className="text-lg text-muted-foreground"></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">May 4, 2025</span>
                </div>
                <CardTitle className="font-serif text-xl">Orquesta Típica Tarareando inaugural concert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Gradus ad Parnassum Music Academy</span>
                </div>
                <CardDescription>
                </CardDescription>
              </CardContent>
            </Card>

          </div>


        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
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

          {/* Newsletter Signup */}
          <Card className="p-0 overflow-hidden">
            <div className="relative w-full h-64 bg-amber-200">
              <iframe
                title="Signup form powered by Zeffy"
                style={{
                  position: 'absolute',
                  border: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  height: '100%'
                }}
                src="https://www.zeffy.com/en-US/embed/newsletter-form/join-our-mailing-list-4"
                allowtransparency={"true"}
              />
            </div>
          </Card>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
