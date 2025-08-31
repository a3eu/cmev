"use client"

import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, Music, Bell } from "lucide-react"

export default function NewsletterSignupPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Newsletter Signup" />
      
      {/* Introduction */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Stay Connected with ¡Con música en vivo!</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our mailing list to receive updates about upcoming performances, special events, and news from our musical community.
          </p>
        </div>
      </section>

      {/* Benefits of Subscribing */}
      <section className="py-16 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">What You'll Receive</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Music className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Event Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Be the first to know about our concerts, milongas, and special performances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Bell className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Exclusive Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Get behind-the-scenes stories and updates from our musicians and programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Community News</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Stay connected with our musical community and learn about volunteer opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Sign Up for Our Newsletter</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community and never miss an update!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-2 mx-auto" style={{maxWidth: '800px'}}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScK-dWjARDlHZ4_nEmx3tsoipnjxtamSOJRNGuIjI_kvyqj6A/viewform?embedded=true"
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Newsletter Signup Form"
            >
              Loading...
            </iframe>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </div>
  )
}
