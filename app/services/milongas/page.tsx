import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"

export default function MilongasPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Milongas" />

      {/* Service Details */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Milongas with live music are special!</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">¡Con música en vivo! can bring an authentic tango ensemble to your event.
              While the full orchestra is more exciting to listen to, the minimal group for danceable repertoire is a quartet (violin, bandoneón, piano, and double bass).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Email info@conmjusicaenvivo.org for more information.</p>
          </div>

        </div>
      </section>
      
      <PageFooter />
    </div>
  )
}
