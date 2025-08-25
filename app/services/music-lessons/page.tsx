import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"

export default function MusicLessonsPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Music Lessons and Coaching" />

      {/* Service Details */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We offer coaching for tango groups and classical chamber music ensembles at any level.
              If you are interested in private instruction in tango or chamber music (any instrument), we
              may be able to help you directly or match you with an instructor.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Email info@conmusicaenvivo.org for more information.
            </p>
          </div>

        </div>
      </section>
      
      <PageFooter />
    </div>
  )
}
