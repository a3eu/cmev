"use client"

import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import Script from "next/script"

export default function NewsletterSignupPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Newsletter" />

      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="ctct-inline-form" data-form-id="6fb9ff5b-5c81-41f1-9713-0d18af461d11"></div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Script id="ctct-var" strategy="lazyOnload">{`var _ctct_m = "f010d5fffcc72fc87d03123b764d6d1f";`}</Script>
      <Script
        id="signupScript"
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        strategy="lazyOnload"
      />

      <PageFooter />
    </div>
  )
}
