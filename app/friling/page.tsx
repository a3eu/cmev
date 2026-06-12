import { notFound } from "next/navigation"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import { getAssetUrl } from "@/lib/utils"
import { Music } from "lucide-react"

const SHOW_FROM = new Date("2026-06-01T07:00:00Z")    // June 1 midnight PT
const RELEASE_DATE = new Date("2026-06-12T07:00:00Z") // June 12 midnight PT

export default function FrilingPage() {
  if (new Date() < SHOW_FROM) notFound()
  const isPreRelease = new Date() < RELEASE_DATE
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Friling (Single)" />
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Cover art */}
            <div className="flex-shrink-0 w-full md:w-80">
              <img
                src={getAssetUrl("/friling-cover-1000.jpg")}
                alt="Friling cover art — Orquesta Típica Tarareando"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#3e7a7a] mb-1">{isPreRelease ? "Dropping June 12!" : "Single · 2026"}</p>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-1">Friling</h2>
              <p className="text-xl text-muted-foreground mb-6">Orquesta Típica Tarareando</p>

              {!isPreRelease && (
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://music.apple.com/us/album/friling-single/6769235208"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
                  >
                    <Music className="w-4 h-4" />
                    Listen on Apple Music
                  </a>
                  <a
                    href="https://open.spotify.com/album/5IGp5gRkiCDnsPoehpskAW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1DB954] text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1aa34a] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                    Listen on Spotify
                  </a>
                </div>
              )}

              <div className="prose prose-sm max-w-none text-foreground/80 space-y-6">
                <p className="font-semibold">
                  A Yiddish tango from the Vilna Ghetto
                </p>
                <p>
                  <em>Friling</em> (meaning <em>Springtime</em> in Yiddish) is a deeply moving song written by poet Shmerke Kaczerginski in April 1943, following the death of his wife Barbara in the Vilna ghetto. The tango melody was composed by fellow inmate Avrom Brudno, and the lyrics convey the author's grief, despair, and profound loneliness.
                </p>
                <p>
                  <em>"I wander through the ghetto from alley to alley, unable to find my place. With my beloved gone, how can I endure the days ahead? Springtime, take away my sorrow, and bring my dearest back to me."</em>
                </p>
                <p>
                  Sung by Alexander Zeyliger accompanied by the cellist Angela Lee and the orchestra.
                </p>
                <p>
                  <a href="https://yiddishsongs.org/friling/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Full lyrics and English translation</a>
                </p>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Musicians</h3>
                  <div className="space-y-1">
                    <p><span className="font-medium">Voice:</span> Alexander Zeyliger</p>
                    <p><span className="font-medium">Cello:</span> Angela Lee</p>
                    <p><span className="font-medium">Violin 1:</span> Keiko Cadby</p>
                    <p><span className="font-medium">Violin 2:</span> Naomi Kawabata</p>
                    <p><span className="font-medium">Violin 3:</span> Sarah Wu</p>
                    <p><span className="font-medium">Bandoneón:</span> Yukie Kawanami</p>
                    <p><span className="font-medium">Piano:</span> Svetlana Shnitser</p>
                    <p><span className="font-medium">Bass:</span> Ken Miller</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Credits</h3>
                  <div className="space-y-1">
                    <p>Arrangements and direction: Alexander Zeyliger</p>
                    <p>Produced by Kenya Autie and Alexander Zeyliger</p>
                    <p>Recorded, mixed, and mastered by Oscar Autie at <a href="https://www.elcerritorecords.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">El Cerrito Records</a></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3e7a7a] mb-2">Acknowledgements</h3>
                  <p>This recording was made possible by generous <a href="/ways-to-give" className="underline hover:opacity-70 transition-opacity">supporters</a> of ¡Con música en vivo!</p>
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
