import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import { getAssetUrl } from "@/lib/utils"
import { Music } from "lucide-react"

const RELEASE_DATE = new Date("2026-05-27T07:00:00Z") // May 26 11:59pm PT

export default function FacturasPage() {
  const isPreRelease = new Date() < RELEASE_DATE
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Facturas (EP)" />
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Cover art */}
            <div className="flex-shrink-0 w-full md:w-80">
              <img
                src={getAssetUrl("/facturas-cover-1000.jpg")}
                alt="Facturas cover art — Orquesta Típica Tarareando"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#3e7a7a] mb-1">{isPreRelease ? "Dropping May 26!" : "EP · 2026"}</p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-1">Facturas</h2>
              <p className="text-xl text-muted-foreground mb-6">Orquesta Típica Tarareando</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://music.apple.com/us/album/facturas-ep/6769608835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
                >
                  <Music className="w-4 h-4" />
                  {isPreRelease ? "Pre-Order on iTunes" : "Listen on Apple Music"}
                </a>
              </div>

              <div className="prose prose-sm max-w-none text-foreground/80 space-y-6">
                <p>
                  The debut EP from <a href="/tarareando" className="underline hover:opacity-70 transition-opacity">Orquesta Típica Tarareando</a> features new arrangements of beloved standards alongside original tangos.
                </p>
                <p>
                  Recorded to reflect the sound and energy of a live performance, the EP captures the ensemble's deep connection to the orquesta típica tradition yet revealing a voice of its own.
                </p>
                <p>
                  While all four songs are arranged for the dance floor, <em>Más allá del tango</em> is presented here in its concert version.
                </p>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Track List</h3>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>Tarareando <span className="text-foreground/50">(Juan José Guichandut y Oscar Rubens)</span></li>
                    <li>Mañana zarpa un barco <span className="text-foreground/50">(music by Lucio Demare, lyrics by Homero Manzi)</span></li>
                    <li>Facturas <span className="text-foreground/50">(Alexander Zeyliger)</span></li>
                    <li>Más allá del tango <span className="text-foreground/50">(Yukie Kawanami)</span></li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Musicians</h3>
                  <div className="space-y-1">
                    <p><span className="font-medium">Violin 1:</span> Keiko Cadby</p>
                    <p><span className="font-medium">Violin 2:</span> Naomi Kawabata</p>
                    <p><span className="font-medium">Violin 3:</span> Sarah Wu</p>
                    <p><span className="font-medium">Cello:</span> Angela Lee</p>
                    <p><span className="font-medium">Bandoneón 1:</span> Yukie Kawanami <span className="text-xs">(1, 2, 4)</span>, Alexander Zeyliger <span className="text-xs">(3)</span></p>
                    <p><span className="font-medium">Bandoneón 2:</span> Yukie Kawanami <span className="text-xs">(3)</span>, Alexander Zeyliger <span className="text-xs">(4)</span></p>
                    <p><span className="font-medium">Piano:</span> Crystie Shum <span className="text-xs">(1, 2, 3)</span>, Svetlana Shnitser <span className="text-xs">(4)</span></p>
                    <p><span className="font-medium">Bass:</span> Ken Miller</p>
                    <p><span className="font-medium">Voice:</span> Alexander Zeyliger <span className="text-xs">(1, 2)</span></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Credits</h3>
                  <div className="space-y-1">
                    <p>Arrangements and direction: Alexander Zeyliger</p>
                    <p>Violin cadenza for <i>Más allá del tango</i>: Keiko Cadby</p>
                    <p>Produced by Kenya Autie and Alexander Zeyliger</p>
                    <p>Recorded, mixed, and mastered by Oscar Autie at <a href="https://www.elcerritorecords.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">El Cerrito Records</a></p>
                    <p>Cover photograph: Svetlana Shnitser</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">English Translations</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="https://tangodecoder.wordpress.com/2014/10/22/tarareando-numbing-by-humming/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">
                        Tarareando
                      </a>
                    </li>
                    <li>
                      <a href="https://poesiadegotan.com/2009/04/07/manana-zarpa-un-barco-1942/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">
                        Mañana zarpa un barco
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Acknowledgements</h3>
                  <p>This recording was made possible by generous <a href="/ways-to-give" className="underline hover:opacity-70 transition-opacity">supporters</a> of <i>¡Con música en vivo!</i></p>
                </div>

                <p className="text-xs text-foreground/40">© 2026 Orquesta Típica Tarareando</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  )
}
