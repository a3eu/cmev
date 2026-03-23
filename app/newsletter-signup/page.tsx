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
      {/*<section className="py-20 px-4 bg-[#f0f8f8]">*/}
      {/*  <div className="max-w-4xl mx-auto text-center">*/}
      {/*    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Stay Connected with ¡Con música en vivo!</h2>*/}
      {/*    <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">*/}
      {/*      Join our mailing list to receive updates about upcoming performances and special events.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Newsletter Signup Form */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          {/*<div className="text-center mb-12">*/}
          {/*  <Mail className="w-16 h-16 text-primary mx-auto mb-6" />*/}
          {/*  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Sign Up for Our Newsletter</h3>*/}
          {/*  <p className="text-lg text-muted-foreground mb-8">*/}
          {/*    Join our community and never miss an update!*/}
          {/*  </p>*/}
          {/*</div>*/}

          <div className="bg-white rounded-lg shadow-lg p-12 mx-auto text-center" style={{maxWidth: '800px'}}>
            <p className="text-lg text-muted-foreground mb-8">
              Join our mailing list to receive updates about upcoming performances and special events.
            </p>
            <a
              href="https://lp.constantcontactpages.com/sl/c8g81Dc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#166579] hover:bg-[#4e788b] text-white font-bold px-12 py-4 text-xl rounded-2xl transition-colors duration-200"
            >
              Sign Up for Our Newsletter
            </a>
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
