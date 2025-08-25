import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Globe } from "lucide-react"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import Link from "next/link";

export default function MusiciansPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Our Musicians" />
      
      {/* Musicians Bios */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Keiko Cadby</CardTitle>
                <CardDescription className="text-lg">Violin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/keiko-cadby-publicity.jpg" alt="Keiko Cadby photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  A mixed native to Northern California and Southern Japan, Keiko Cadby has been playing violin since the age of 5, and graduated from the Suzuki method program before studying with Jeremy Constant. Her childhood accolades include the Mary Paige Phillips Award and the Command Performance Award from California Music Educator's Association of the Bay Area, and placed first in competitions including the Yen Liang Young Artist Competition in Walnut Creek, the Ruth Finley Person Etude Music Club, and Santa Rosa Youth Orchestra Concerto Competitions in Northern California. She continued her education with Lorenz Gamma and Movses Pogossian at the UCLA Herb Alpert School of Music, where she was also first introduced to Argentine tango through the music chair and cello professor Antonio Lysy (son of the legendary Argentine violinist Alberto Lysy). Later, she participated in the Stowe Tango Music Festival and studied with renowned Tango artists such as Julio Pane, Nicolas Ledesma, and more.
                </p>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    <Link href={`http://kaycadby.bol.ucla.edu/Music.html`}>Website</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Naomi Kawabata</CardTitle>
                <CardDescription className="text-lg">Violin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/naomi-kawabata-publicity.jpg" alt="Naomi Kawabata photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  Naomi began playing the violin at a very young age, but it wasn’t until 2016, when she joined the La Orquesta Fusion Tango group, that she discovered the world of tango music. Since then, she has continued to deepen her study of tango music, performing with Orquesta Típica Tarareando.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Sarah Wu</CardTitle>
                <CardDescription className="text-lg">Violin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/sarah-wu-publicity.jpg" alt="Sarah Wu photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  A Bay Area native, Sarah Wu started violin studies with San Mateo Suzuki teacher Marjorie Lin at age 11 and has played ever since. She studied psychology and music at Reed College in Portland, where she was the concertmaster of the Reed College Orchestra and a member of multiple chamber ensembles. Sarah earned 2nd place in the 2022 OR-ASTA Solo Competition (Senior division) for her performance of The Lark Ascending and performed the piece as a soloist with the Reed College Orchestra. Supported by the Rothchild and Kahan Fellowships, Sarah had the opportunity to study with violinists Paloma Griffin-Hébert and Inés Voglar-Belgique; other prominent musical mentors in Oregon included Monica Ohuchi, Kenji Bunch, and Giancarlo Castro D'Addona.
                </p>

                <p className="mt-4 text-muted-foreground mb-4">
                  Reed was also where Sarah was introduced to Argentine tango. Inspired from playing a Piazzolla piano trio, Sarah participated in Tango for Musicians at Reed College, where she learned tango violin techniques and performance practice from Guillermo Rubino. In Portland she performed in the tango quintet Ciao Felicia and since returning to the Bay Area she has performed with Orquesta Típica Tarareando. Sarah is also a member of Peninsula Symphony and plays a variety of genres (including tango!) for their music outreach events at Bay Area school assemblies.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Mariya Borozina</CardTitle>
                <CardDescription className="text-lg">Violin (Guest)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/mariya-borozina-publicity.jpg" alt="Mariya Borozina photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Polina Sedukh</CardTitle>
                <CardDescription className="text-lg">Violin (Guest)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/polina-sedukh-458x458.jpg.webp" alt="Polina Sedukh photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Angela Lee</CardTitle>
                <CardDescription className="text-lg">Cello</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/angela-lee-publicity.jpg" alt="Angela Lee photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  Angela Lee is a graduate of The Juilliard School and Yale School of Music. Since making her Carnegie Hall debut in 1994, she has concertized throughout Europe, Asia, and North America. She is a founding member of The Lee Trio, which has commissioned and premiered works of numerous living composers. Using music to foster peace and goodwill, she has made humanitarian trips to the Republic of the Philippines and the former Yugoslavia. While on a U.N.-sanctioned tour of six war-torn cities throughout Bosnia-Herzegovina, she performed for NATO troops and displaced civilians. In addition to coaching chamber music at the San Francisco Conservatory of Music, Ms. Lee serves on the San Francisco Symphony Youth Orchestra Alumni Association Leadership Council and on the Board of Directors of
                   <Link href={"https://music-resonance.org/"}
                         className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   >The Resonance Project</Link>, which promotes live music in mediation settings and international conflict resolution.
                </p>
              </CardContent>
            </Card>


            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Alexander Zeyliger</CardTitle>
                <CardDescription className="text-lg">Bandoneón, Voice, Direction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/alexander-zeyliger-publicity.jpeg" alt="Alexander Zeyliger photo" className="w-full h-full object-cover object-center" />
                  <span className="text-sm text-muted-foreground text-right">Photo <a href="http://www.styush.com/about-me"
                                                                                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  >Styush</a></span>
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  Having grown up listening to records from the 1930s and ‘40s and singing them back,
                  he studied voice, piano, and clarinet at a music school in Leningrad, USSR.
                  While pursuing a Physics degree at Caltech, he never missed a quarter of Caltech Glee Club
                  and Chamber Singers. He studied classical singing with Frieda Bernstein and Eugene Brancoveanu.
                  After discovering Argentine tango as a social dance some over twenty years ago, it was only a matter of time
                  before he was drawn into singing tangos and playing the bandoneón, an instrument of German origin
                  that found its way to Argentina to become the soul of tango music.
                  Alexander attended Tango Music Institute at Reed College as vocalist, bandoneón player,
                  and arranger, and participated in the Stowe Tango Music Festival.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Yukie Kawanami</CardTitle>
                <CardDescription className="text-lg">Bandoneón (Guest)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/yukie-publicity.jpg" alt="Yukie Kawanami photo" className="w-full h-full object-cover object-center" />
                </div>

                <div className="mt-4 text-muted-foreground mb-4">

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Globe className="w-4 h-4 mr-2" />
                      <Link href={`https://yukiekawanami3.webnode.jp/`}>Website</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Crystie Shum</CardTitle>
                <CardDescription className="text-lg">Piano, Voice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/crystie-shum-publicity.jpg" alt="Crystie Shum photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  Born in Hong Kong, Crystie began piano lessons at four, and studied for eight years. In 2017, she decided to play piano again, and fell in love with Argentine tango after playing in the CMC Tango Ensemble directed by Scott O’Day. Since then, she has been receiving coaching from maestros such as Hector Del Curto, Pablo Estigarribia, Gustavo Casenave, Hernan Possetti, Nicolas Ledesma, AdrianEnriquez, Cesar Salgan, Julian Peralta, Juan Pablo Gallardo. In August, 2022, she performed in the Stowe Tango Music Festival Orchestra, and experienced playing a piece for the Che Bandoneon International Competition. Crystie is currently a pianist, vocalist, and arranger in La Orquesta Fusion Tango, TangoLuna, Tango Brumoso, and Orquesta Tipica Tarareando. Besides music, she is a social worker with two dogs and a parrot.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Svetlana Shnitser</CardTitle>
                <CardDescription className="text-lg">Piano</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/Svetlana-publicity.jpg" alt="Svetlana Shnitser photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Ken Miller</CardTitle>
                <CardDescription className="text-lg">Double-bass</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/ken-miller-publicity.jpg" alt="Ken Miller photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                  Ken Miller is a versatile double-bass player who works in many genres. He played with the SF Symphony, SF Opera, Philharmonia Baroque Orchestras, and The Skywalker Symphony Orchestra. In addition, he is active on the San Francisco Jazz scene, having performed with many top level players including Branford Marsalis, Bruce Forman, Mark Levine, and Mimi Fox.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Chris Johnson</CardTitle>
                <CardDescription className="text-lg">Double-bass</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-2xl text-right">
                  <img src="/v2/chris-johnson-publicity.jpg" alt="Chris Johnson photo" className="w-full h-full object-cover object-center" />
                </div>

                <p className="mt-4 text-muted-foreground mb-4">
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </div>
  )
}
