import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-soft p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Open Desk's services, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Open Desk provides workspace booking and desk rental services. We facilitate connections between 
                workspace providers and individuals seeking professional work environments. Our platform allows users 
                to discover, book, and pay for workspace solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Users agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Maintain the security of their account credentials</li>
                  <li>Use the service in compliance with all applicable laws</li>
                  <li>Respect workspace rules and guidelines</li>
                  <li>Pay all fees and charges associated with their bookings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Booking and Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                All bookings are subject to availability and confirmation. Payment is required at the time of booking. 
                Cancellation and refund policies vary by workspace provider and are clearly stated during the booking process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Open Desk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting 
                from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive 
                property of Open Desk and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice 
                or liability, under our sole discretion, for any reason whatsoever, including without limitation if you 
                breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@opendesk.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;