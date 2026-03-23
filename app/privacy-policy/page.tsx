import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"

export const metadata = {
  title: "Privacy Policy | ¡Con música en vivo!",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#b0c4c4]">
      <PageHeader title="Privacy Policy" />

      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy matters to us. This policy explains what information we collect when
                you use our site and how we handle it. We keep it minimal: the only personal
                information we ever collect is an email address, and only if you choose to
                subscribe to our newsletter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Information we collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect only the information you choose to give us. If you sign up for our
                newsletter, we collect your email address for the sole purpose of sending you
                updates. We do not collect your name, phone number, or any other personal
                information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can unsubscribe at any time using the link included in every email we send.
                We will not use your email address for any purpose other than the newsletter,
                and we will not sell or share it with third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Hosting &amp; infrastructure</h2>
              <p className="text-gray-700 leading-relaxed">
                This site is hosted on GitHub Pages. GitHub may collect certain technical
                information as part of serving the site, including IP addresses and browser
                information. We have no control over this data collection. Please review{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e7a7a] underline hover:text-[#4a8b8b] transition-colors"
                >
                  GitHub&apos;s Privacy Statement
                </a>{" "}
                for details on how GitHub handles data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Cookies &amp; tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not use cookies, analytics, tracking pixels, or any third-party tracking
                scripts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Third-party services</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not share data with third parties, because we do not collect any data to
                share.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Changes to this policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this policy from time to time. Changes will be reflected by
                updating the effective date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#3e7a7a] mb-3">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about this policy? Reach us at{" "}
                <a
                  href="mailto:info@conmusicaenvivo.org"
                  className="text-[#3e7a7a] underline hover:text-[#4a8b8b] transition-colors"
                >
                  info@conmusicaenvivo.org
                </a>.
              </p>
            </section>

          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
