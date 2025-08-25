"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Music, Gift, CreditCard, Building } from "lucide-react"
import PageHeader from "@/components/page-header"
import PageFooter from "@/components/page-footer"
import Link from "next/link";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const initialOptions = {
  "client-id": "BAA5dv8UNz_H8rEZwPXdwLB6ZHB6LCKk-PaJTK5geTmQ35UL1v8yf0qifqR6-mVOh8LiKtFbuGfQAdmJUA",
  currency: "USD",
  intent: "capture",
  "enable-funding": "venmo"
};

export default function WaysToGivePage() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="min-h-screen bg-[#b0c4c4]">
        <PageHeader title="Ways to Give" />
      
      {/* Introduction */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Help Bring Live Music to Dancers and Audiences</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            First and foremost, thank you for coming to our performances! This already supports us and means a lot to us.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            As is often the case with performing arts groups, ticket sales only cover a fraction of our expenses.
          </p>
          <p className="mt-4 text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your generosity helps us continue bringing the beauty of Argentine Tango and Chamber Music to audiences
            throughout the San Francisco Bay Area. Every contribution, no matter the size, makes a meaningful difference
            in supporting our musicians and educational programs.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Ways to Contribute</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Donation */}
            <Card className="p-6">
              <CardHeader className="text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Donate Online</CardTitle>
                <CardDescription className="text-base">
                  Your tax-deductible gift directly funds live performances
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                </p>
                <Button className="w-full mb-4">By credit card
                  <Link href={`https://donate.stripe.com/eVqbJ3gCIdSj3RL3e3dfG00`}>(processed by Stripe)</Link>
                </Button>
                <Button className="w-full mb-4">By credit card
                  <Link href={`https://www.zeffy.com/en-US/donation-form/support-live-music`}>(processed by Zeffy)</Link>
                </Button>
                <p className="text-muted-foreground mb-6">
                </p>
                <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "100.00", // Default donation amount
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                      });
                    }}
                    style={{
                      layout: "vertical",
                      color: "gold",
                      shape: "rect",
                      label: "donate"
                    }}
                />
              </CardContent>
            </Card>

            {/* Corporate Sponsorship */}
            <Card className="p-6">
              <CardHeader className="text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Corporate Sponsorship</CardTitle>
                <CardDescription className="text-base">
                  Partner with us to support live music in your community!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Corporate sponsors receive recognition at events, in programs, and on our website. 
                </p>
                <p className="text-muted-foreground mb-6">
                  Email info@conmusicaenvivo.org to explore sponsorship opportunities
                </p>
              </CardContent>
            </Card>

            {/* Other Sponsorship */}
            <Card className="p-6">
              <CardHeader className="text-center">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-2xl mb-2">Other Giving</CardTitle>
                <CardDescription className="text-base"></CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  We will be honored if you donated to us through a donor-advised fund
                  or your employer's matching fund program.
                </p>
                <p className="text-muted-foreground mb-6">
                  Please reach out if you would like to host a fundraising event for us,
                  offer a matching gift, make a gift in honor of someone, ro sponsor a specific program.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Other Ways to Help</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Donate instruments, equipment, or professional services to support our work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Share your time and talents to help with events, administration, or outreach.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif text-xl">Host an Event</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Open your home for a house concert and help us reach new audiences.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#f0f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Questions About Giving?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help you find the best way to support our mission. 
            Contact us to discuss donation options or learn more about our programs.
            Email: info@conmusicaenvivo.org
          </p>
        </div>
      </section>
      
        <PageFooter />
      </div>
    </PayPalScriptProvider>
  )
}