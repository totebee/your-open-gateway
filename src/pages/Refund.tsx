import Navbar from "@/components/Navbar";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-soft p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Refund Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refunds are available under specific circumstances as outlined in this policy. The eligibility for 
                refunds depends on the timing of your cancellation request and the specific terms of your workspace booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Cancellation Timeframes</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <div className="bg-secondary rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Full Refund</h3>
                  <p>Cancellations made 24 hours or more before the booking start time are eligible for a full refund.</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Partial Refund (50%)</h3>
                  <p>Cancellations made between 12-24 hours before the booking start time are eligible for a 50% refund.</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <h3 className="font-semibold mb-2">No Refund</h3>
                  <p>Cancellations made less than 12 hours before the booking start time are not eligible for refunds.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Processing Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                Approved refunds will be processed within 5-7 business days. Refunds will be issued to the original 
                payment method used for the booking. Please note that it may take additional time for the refund to 
                appear in your account depending on your payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Special Circumstances</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Full refunds may be granted outside the standard timeframe for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Medical emergencies (documentation required)</li>
                  <li>Natural disasters or extreme weather conditions</li>
                  <li>Workspace closures due to unforeseen circumstances</li>
                  <li>Technical issues preventing access to the workspace</li>
                  <li>Significant misrepresentation of workspace amenities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. How to Request a Refund</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>To request a refund:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Log into your Open Desk account</li>
                  <li>Navigate to your booking history</li>
                  <li>Select the booking you wish to cancel</li>
                  <li>Click "Request Refund" and provide a reason</li>
                  <li>Submit the refund request form</li>
                </ol>
                <p className="mt-4">
                  Alternatively, you can contact our support team at support@opendesk.com with your booking reference number.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Monthly Subscriptions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monthly subscription plans can be cancelled at any time. Cancellations will take effect at the end of 
                the current billing period. No partial refunds are provided for monthly subscriptions, but you will 
                retain access to services until the end of your paid period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you disagree with our refund decision, you may appeal by contacting our customer service team 
                within 14 days of the original decision. All appeals will be reviewed by a senior team member.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund requests or questions about this policy, please contact us at:
                <br />
                Email: refunds@opendesk.com
                <br />
                Phone: 1-800-OPENDESK
                <br />
                Response time: Within 24 hours
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Refund;