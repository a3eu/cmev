import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import { getAssetUrl } from "@/lib/utils"
import { Music } from "lucide-react"

const RELEASE_DATE = new Date("2026-05-27T07:00:00Z") // May 26 11:59pm PT

export default function RecordingsPage() {
  const isPreRelease = new Date() < RELEASE_DATE
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Recordings" />
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
                <a
                  href="/facturas"
                  className="inline-flex items-center gap-2 border border-black/30 text-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black/10 transition-colors"
                >
                  More info ↗
                </a>
              </div>

              <div className="prose prose-sm max-w-none text-foreground/80 space-y-3">
                <p>
                  The debut EP from <a href="/tarareando" className="underline hover:opacity-70 transition-opacity">Orquesta Típica Tarareando</a> presents two new arrangements of beloved standards alongside two original tangos.
                </p>
                <p>
                  Recorded at <a href="https://www.elcerritorecords.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">El Cerrito Records</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  )
}
