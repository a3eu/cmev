import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"

export default function HouseConcertsPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="House Concerts" />

      {/* Service Details */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              House concerts offer a unique and intimate way to experience live music. In the comfort of a private home,
              audiences can connect with performers and music in a way that's impossible in traditional concert halls.
              Our house concerts feature Argentine tango and chamber music in settings
              that foster genuine musical connection.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              There is much flexibility in forming groups for house concerts. The ensemble and the repertoire
              are tailored to the hosts' circumstances. We hope your house has a nice piano but we can also bring a keyboard.
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
