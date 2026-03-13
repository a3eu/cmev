import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, Users } from "lucide-react"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import Link from "next/link"
import { getAssetUrl } from "@/lib/utils"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Blog" />

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* 2025 Year in Review Post */}
            <article className="border-b border-border pb-12">
              <Card className="border-0 shadow-none p-0">
                <CardHeader className="px-8 p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">December 26, 2025</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Year in Review</span>
                  </div>
                  <CardTitle className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    2025 in Review
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground mb-4">
                      2025 was our first year, and we had a great time getting things started. Your support helped us produce and co-sponsor several concerts and milongas throughout the year.
                    </p>
                    <p className="text-foreground mb-4">
                      Between shows, we worked on new repertoire and recorded several songs, which we'll be releasing this coming May. 2026 is already filling up, including the Orquesta Típica Tarareando debut at the San Francisco International Arts Festival.
                    </p>
                    <p className="text-foreground mb-4">
                      Thanks for being part of our inaugural year! See you in 2026!
                    </p>
                  </div>

                  {/* Photo Gallery */}
                  <div className="mt-8 flex flex-col gap-3">
                    {/* Row 1 - full width */}
                    <img loading="lazy" src={getAssetUrl("/b2-2.jpg")} alt="2025 highlights" className="w-full h-auto rounded-lg" />
                    
                    {/* Row 2 - two images side by side, heights matched */}
                    <div className="flex gap-3 items-stretch">
                      <div className="w-[58%] overflow-hidden rounded-lg">
                        <img loading="lazy" 
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

                  {/* Video */}
                  <div className="mt-6 relative w-full aspect-video">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/jauK8-tid1s"
                      title="Orquesta Típica Tarareando"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Concert Recap Post */}
            <article className="border-b border-border pb-12">
              <Card className="border-0 shadow-none p-0">
                <CardHeader className="px-8 p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">May 5, 2025</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Concert Recap</span>
                  </div>
                  <CardTitle className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    Highlights from Our Inaugural Concert
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="w-full max-w-2xl text-right">
                    <img loading="lazy" src={getAssetUrl("/20250504-453.jpg")} alt="concert photo" className="w-full h-full object-cover object-center" />
                    <span className="text-sm text-muted-foreground text-right">Photo <a href="https://www.instagram.com/akolb4/"
                                                                             className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >Alex Kolbasov</a></span>
                  </div>
                  <div className="mt-8 prose prose-lg max-w-none">
                    <p className="text-foreground mb-4">
                      Great energy on May the 4th&mdash;the Star Wars Day&mdash;at the Gradus ad Parnassum Music Academy
                      recital hall with special guests Yukie Kawanami and Polina Sedukh. In addition to tango classics,
                      we played adaptations of a Shostakovich trio, Piazzolla's hidden gem Tango Seis, and, yes,
                      a couple of Star Wars covers. With pianos in the hall, were piano duos, too!
                    </p>
                    <p className="text-foreground mb-4">
                    It was great to see many old friends and new faces in the audience!
                    </p>
                  </div>
                  <div className="mt-4 relative w-full aspect-video">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/zVKURTMEeo8"
                        title="Shostakovich Trio"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                  </div>
                  <div className="mt-4 relative w-full aspect-video">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/Vo1_ScX0PTc"
                        title="Más allá del tango"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                  </div>
                  <div className="mt-4 relative w-full aspect-video">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/ebyYhNKwayM"
                        title="La yumba"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border p-4">
                    <Music className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Don't miss: a <a href="https://www.zeffy.com/en-US/ticketing/tango-y-mas"
                                       className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >out next concert</a> at Gradus Ad Parnassum on Sunday Music Academy, Oct 14, 2025, 2pm.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
